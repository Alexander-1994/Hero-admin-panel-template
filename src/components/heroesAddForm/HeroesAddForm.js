import { useDispatch } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { heroesFetchingError, heroesAddHero } from "../../actions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import '../../styles/index.scss';
// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onAddHero = (hero) => {
        request('http://localhost:3001/heroes', 'POST', JSON.stringify(hero))
            .then(() => dispatch(heroesAddHero(hero)))
            .catch(err => console.log(err))
    }

    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                element: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                         .required('Укажите имя!')
                         .min(5, 'Минимальное кол-во символов - 5'),
                description: Yup.string()
                         .required('Укажите описание!')
                         .min(10, 'Минимальное кол-во символов - 10'),
                element: Yup.string()
                         .required('Укажите элемент!')
            })}
            onSubmit={(values, {resetForm}) => {
                const newHero = {id: uuidv4(), ...values};
                onAddHero(newHero);
                resetForm();                
            }}>
            <Form className="border p-4 shadow-lg rounded">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                    <Field 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        id="name" 
                        placeholder="Как меня зовут?"/>
                    <ErrorMessage name="name" className="validateMessage" component="div" />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label fs-4">Описание</label>
                    <Field
                        as="textarea"
                        name="description" 
                        className="form-control" 
                        id="description" 
                        placeholder="Что я умею?"
                        style={{"height": '130px'}}/>
                    <ErrorMessage name="description" className="validateMessage" component="div" />
                </div>

                <div className="mb-3">
                    <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <Field 
                        className="form-select" 
                        id="element" 
                        name="element"
                        as="select">
                        <option >Я владею элементом...</option>
                        <option value="fire">Огонь</option>
                        <option value="water">Вода</option>
                        <option value="wind">Ветер</option>
                        <option value="earth">Земля</option>
                    </Field>
                    <ErrorMessage name="element" className="validateMessage" component="div" />
                </div>

                <button type="submit" className="btn btn-primary">Создать</button>
            </Form>
        </Formik>
    )
}

export default HeroesAddForm;