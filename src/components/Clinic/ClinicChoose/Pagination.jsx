import React from 'react'

const Pagination = () =>{
    return(        
        <div className="d-flex justify-content-center">
            <ul className='pagination'>
                <li className="page-item">
                    <a className='page-link' href='/booking/1'>1</a>
                </li>
                <li className="page-item">
                    <a className='page-link' href='/booking/2'>2</a>
                </li>
                <li className="page-item">
                    <a className='page-link' href='/booking/3'>3</a>
                </li>
            </ul>        
        </div>
    )
}
export default Pagination