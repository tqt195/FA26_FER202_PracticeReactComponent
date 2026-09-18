export default function MyProfile({textInfor,avatarInfo}) {
    
    return ( <div>
        <h1>Hello My Profile</h1>
        <img 
        src={avatarInfo.src}
        alt={avatarInfo.alt}

        width={100}
        height={200}
       />
        </div>);
}

export function MySubject(){
    const subject = ["ReactJS","NodeJS","Java"]
    const subjectv2 = [{id:1,name:"ReactJS",cate:"JS"},
        {id:2,name:"NodeJS",cate:"JS"},
        {id:3,name:"Java",cate:"OOP"}

    ]
const jsSubject = subjectv2.filter( js => js.cate==="JS")

    return(
        <>
        <h2>MySubject</h2>
        <ul>
            { jsSubject.map( (s) => <li>{s.name}</li>)}
        </ul>
        </>
    )
}