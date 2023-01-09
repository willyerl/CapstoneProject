import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'
import axios from 'axios'

function Newuser() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [response, setResponse] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()
   
    
    const redirectPath = location.state?.path || '/'

    const HandleSubscribe = async () => {
        await axios
            .get(`http://localhost:3001/User?name=${user}&email=${email}&password=${pass}`)
            .then(res => { 
                    navigate('/login')
                })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <section id='log' className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div id='log2' className="card shadow-2-strong" >
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="typeUserX-2">
                                        Username:</label>{' '}
                                    <input type='text' id="typeUserX-2"
                                        className="form-control form-control-lg" onChange={e => setUser(e.target.value)} />
                                    {/* </label> */}
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="typeEmailX-2">
                                        Email</label>{' '}
                                    <input type="email" id="typeEmailX-2"  className="form-control form-control-lg" 
                                        onChange={e => setEmail(e.target.value)}  size="30" required />
                                </div><br/>
                              

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="typePasswordX-2" >
                                        Password</label>
                                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" 
                                    onChange={e => setPass(e.target.value)} />
                                </div>

                                <p>{response}</p>
                                <button className="btn btn-primary btn-lg btn-block"  onClick={HandleSubscribe}>Subscribe</button>

                                <hr className="my-4" />



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Newuser