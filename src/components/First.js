import React from 'react';

const esther = {
    textAlign: 'justify',
    color: 'red',
    padding: '20px'

}


const First = ()=>{
    return(<div className='wrapper' style={{border:'solid', borderRadius:'15px 0 15px 0', width: '50%'}}>
        <div className='wrap' style={esther}>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, laborum!
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolor vitae atque earum voluptates pariatur quibusdam, reiciendis, minima aliquam illum suscipit cum placeat nostrum. Pariatur obcaecati possimus ea distinctio quae!
            </p>
        </div>
    </div>) 
}


export default First