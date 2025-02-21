

export default function Header(){



    return (
        <>
        
            <div className="notes-header">
                <ul className="notes-nav">
                    <li>
                    <button className="active">All Notes</button>
                    </li>
                    <li>
                    <button>Business</button>
                    </li>
                    <li>
                    <button>Social</button>
                    </li>
                    <li>
                    <button>Important</button>
                    </li>
                </ul>
                <button className="add-notes">Add Notes</button>
            </div>

        
        </>
    )


}