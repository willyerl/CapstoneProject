import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'
function Logout() {
    const navigate = useNavigate()
    const auth = useAuth()
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return (
        <section id='log' className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div id='log2' className="card shadow-2-strong" >
                            <div className="card-body p-5 text-center">
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="typeUserX-2">
                                    {auth.user}, do you really want to leave us?</label>                        
                                </div>
                                <button onClick={handleLogout}>Logout</button>
                                <hr className="my-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
    )
}
export default Logout