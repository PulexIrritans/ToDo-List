const Filter = ({ filter, showfilter }) => {
return ( 
<ul className="Filter-ul">
    {filter.map((item,index) =>(<li key={index} className="Filter-li ${item.status}" onClick={() => showfilter(index)}>{item.name}</li>))}
</ul>
)
}

export default Filter