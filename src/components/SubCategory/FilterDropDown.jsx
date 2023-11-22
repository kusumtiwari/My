import {FiFilter} from 'react-icons/fi';

export default function FilterDropDown({displaySelection1}){
    
    return(
        <div>
            <FiFilter className='text-primary-blue text-2xl mx-4 lg:hidden cursor-pointer' onClick={displaySelection1}/>
        </div>
    )
}