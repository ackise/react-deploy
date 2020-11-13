import React, { useRef } from 'react'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import './Section4.scss'
import { Button, createMuiTheme, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import { loadUsersFromServer } from '../../../redux/users/usersActions';
import { makeStyles } from '@material-ui/core/styles';
import { toggleModal } from '../../../redux/modal/modalActions';
import Modal from '../../Modal/Modal'
import * as validation from '../../../services/validation'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000'
        },
    },
});


const useStyles = makeStyles((theme) => ({
    root: {
        width: '330px',
        '& .MuiTextField-root': {
            marginTop: '14px',

        },
        '& .Mui-focused': {
            borderColor: 'red'
        },

        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'solid 1px #d4d9de'
            },
        },

        '& .MuiOutlinedInput-input': {
            "&::placeholder": {
                fontSize: '16px',
                color: '#b2b9c0',
                fontFamily: 'PT Sans , sans-serif',
            },
            padding: '14px',
            height: '14px'
        },
        '& .MuiFormLabel-root': {
            fontFamily: 'PT Sans , sans-serif',
            fontSize: '16px',
            color: '#212529',
        },
        '& .MuiFormGroup-root': {
            marginTop: '22px',
            marginBottom: '22px'
        },
        '& .MuiRadio-root': {
            color: '#adb5bd'
        },
        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: '#007bff',
        },
        '& .MuiButton-contained': {
            marginTop: '14px',
            width: '83px',
            backgroundColor: '#f8f7f5',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            fontFamily: 'PT Sans , sans-serif',
            textTransform: "none",
            boxShadow: 'none',
            border: 'solid 1px #d4d9de'
        }
    },
    field: {
        margin: '0 auto',
        marginBottom: '27px',
        width: '100%'

    },
    photo: {
        '& .MuiOutlinedInput-input': {
            padding: '14px 68px 10px 13px',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRight: 'none',
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            }
        }

    },
    inputfield: {
        '&$focused': {
            borderColor: theme.palette.primary
        }
    }

}));


const Section4 = (props) => {
    const { positions, modalIsOpen } = props
    // ---------------------------------------- //
    const classes = useStyles();
    const dispatch = useDispatch()
    const openModal = () => dispatch(toggleModal())
    const update = () => dispatch(loadUsersFromServer())
    // ---------------------------------------- //

    let positionsList = typeof positions !== 'undefined' ? positions : []
    let imgRef = useRef('')

    // ---------------------------------------- //
    const [position, setPosition] = React.useState('')
    const handleChange = (event) => {
        setPosition(event.target.value);
    };

    // ---------------------------------------- //

    const [text, setText] = React.useState('')
    const handleText = (text) => {
        setText(text)
    }
    // ---------------------------------------- //

    const [name, setName] = React.useState('')
    const handleNameInput = (e) => {
        setName(e.target.value)
    }

    // ---------------------------------------- //

    const [email, setEmail] = React.useState('')
    const handleEmailInput = (e) => {
        let notValidatedEmail = e.target.value
        let validatedEmail = notValidatedEmail.match(validation.mailFormat)
        setEmail(validatedEmail)
    }


    // ---------------------------------------- //

    const [phone, setPhone] = React.useState('')
    const handlePhoneInput = (e) => {
        let notValidatedPhone = e.target.value
        let validatedPhone = notValidatedPhone.match(validation.phoneformat)
        setPhone(validatedPhone)
    }

    // ---------------------------------------- //

    const [file, setFile] = React.useState('')
    const handleFileInput = (e) => {
        let fileName = e.target.value !== undefined ? e.target.value.replace(/^.*[\\\/]/, '') : ''
        setFile(fileName)
    }

    // ---------------------------------------- //

    // ***formReset***

    let forma = document.getElementById('myForm')

    const resetForm = (oForm) => {
        let elements = oForm.elements
        oForm.reset()

        for (let i = 0; i < elements.length; i++) {

            let field_type = elements[i].type.toLowerCase();

            switch (field_type) {

                case "text":
                case "password":
                case "textarea":
                case "hidden":
                    setFile('')
                    break;

                case "radio":
                    if (position > 0) {
                        setPosition('');
                    }
                    break;
                default:
                    break;
            }
        }

    }

    // ---------------------------------------- //

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append("name", name)
        formData.append("email", email.input)
        formData.append("phone", phone.input)
        formData.append("position_id", +position)
        formData.append("photo", imgRef.current.files[0])
        const registration = async () => {
            const res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token', {
                method: "GET"
            })

            const data = await res.json()
            const token = data.token


            const newUser = async () => {
                const res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
                    method: "POST",
                    headers: {
                        'Token': token
                    },
                    body: formData
                })
                const serverAnswer = await res.json()

                try {
                    if (serverAnswer.success === true) {
                        console.log(serverAnswer.message)
                    }
                    if (serverAnswer.success !== true) {
                        throw serverAnswer.message
                    }
                }
                catch (e) {
                    handleText(e)

                }

            }
            newUser()
        }
        registration()

        setTimeout(() => resetForm(forma), 2000)
        setTimeout(() => update(), 1000)
        setTimeout(() => openModal(), 2000)


    }

    return (
        <>
            {modalIsOpen ? <Modal text={text} /> : null}

            <div name='form' id='form' className='formwrapper'>
                <h1 className='formwrapper__title'>Register to get a work </h1>
                <form className={classes.root} onSubmit={handleSubmit} autoComplete="off" id='myForm'>
                    <FormControl className={classes.field}>
                        <FormLabel component="legend" htmlFor='name'>Name</FormLabel>
                        <TextField id='name' minLength='2' maxLength='60' onChange={handleNameInput} placeholder='Your name' required variant="outlined" className={classes.inputfield}></TextField>
                    </FormControl>
                    <FormControl className={classes.field}>
                        <FormLabel component="legend" htmlFor='email'>Email</FormLabel>
                        <TextField id='email' minLength='2' maxLength='60' placeholder='Your email' required variant="outlined" onChange={handleEmailInput} ></TextField>
                    </FormControl>
                    <FormControl className={classes.field}>
                        <FormLabel component="legend" htmlFor='phone' >Phone number</FormLabel>
                        <TextField id='phone' placeholder='+380 XX XXX XX XX' variant="outlined" onChange={handlePhoneInput} type='tel'></TextField>
                        <FormHelperText>Enter phone number in open format</FormHelperText>
                    </FormControl>
                    <FormControl component="fieldset" className='form__field'>
                        <FormLabel component="legend">Select your position</FormLabel>
                        <RadioGroup aria-label="position" name="position" value={position} onChange={handleChange}>
                            {positionsList.map(position => <FormControlLabel value={position.id + ''} control={<Radio />} key={position.name} label={position.name} />)}
                        </RadioGroup>
                    </FormControl>
                    <FormControl >
                        <FormLabel component="legend">Photo</FormLabel>
                        <input
                            accept='image/*'
                            id='image'
                            type='file'
                            style={{ display: "none" }}
                            ref={imgRef}
                            onChange={handleFileInput}
                        />
                        <div className='photo-input'>
                            <TextField placeholder='Upload you photo' disabled variant="outlined" className={classes.photo} id='file' value={file} ></TextField>
                            <label htmlFor='image'>
                                <Button id='image' component="span" variant="contained" >Browse</Button>
                            </label>
                        </div>
                    </FormControl>

                    <button className='button' type='submit' >Sign up now</button>
                </form>

            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        positions: state.positions.positions,
        modalIsOpen: state.modal.modalIsOpen
    }
}


export default connect(mapStateToProps)(Section4)