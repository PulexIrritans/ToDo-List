const Filter = ({ filter, showfilter, filterStatus }) => {
return ( 
<ul className="Filter-ul">
    {filter.map((item,index) =>(<li key={index} className={`Filter-li ${filterStatus===item.name ? "On" : ""}`} onClick={() => showfilter(index, item.name)}>{item.name}</li>))}
</ul>
)
}

export default Filter