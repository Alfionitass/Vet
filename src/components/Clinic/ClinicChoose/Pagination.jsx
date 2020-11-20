import React from 'react'

const Pagination = ({totalPages}) =>{
    console.log('pages',totalPages)
    var foo = Array.from(Array(totalPages).keys()) 
    // var foo =[1,2,3,4]
    let hal
    const page = foo.map((value, index)=>(
                <li className="page-item" key={index}>
                    {/* {hal =  index +1} */}
                    <a className='page-link' 
                    href={`${process.env.PUBLIC_URL}/booking/${index+1}`}>                        
                    {index+1}
                    </a>
                </li>
                ))
                        
    return(        
        <div className="d-flex justify-content-center">
            <ul className='pagination'>
            {page}                
            </ul>        
        </div>
    )
}
export default Pagination