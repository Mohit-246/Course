


function SecondComponent({vegetable}) {
    const fruits = ["apple", "Banana", "Mango", "Orange", "Pineapple", "Papaya", "Starwberry"]
    return (
        <>
            <div className="Flex">
                {fruits.map((fruitname, id) => (

                    <div className="Fruits">
                        {fruitname}
                    </div>
                ))}
            </div>
            <div className="Flex">
                {vegetable.map((vegetable, id) => (

                    <div className="Fruits">
                        {vegetable}
                    </div>
                ))}
            </div>
        </>
    )
}
export default SecondComponent;