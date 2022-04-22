import * as S from '../../public/assets/styles/Skills.style'




export default function Skills() {
  const Skills=[
    {name:'HTML',
    percent:'80%'    
  },
  {name:'CSS',
  percent:'80%'    
},
{name:'JavaScript',
percent:'60%'    
},
{name:'React.js',
percent:'50%'    
},
{name:'Styled-Components',
percent:'50%'    
},
{name:'SCSS',
percent:'50%'    
},
{name:'Rest Api',
percent:'70%'    
},
{name:'Node.js',
percent:'30%'    
},
{name:'Context Api',
percent:'30%'    
},
{name:'MongoDB',
percent:'50%'    
},
{name:'Jest',
percent:'30%'    
},
{name:'Docker',
percent:'20%'    
},
{name:'MySQL',
percent:'50%'    
}
  ]
  return (
    <S.Skills>
      {Skills.map((item,index)=>(
        <S.Container key={index}>
          <label>{item.name}</label>
          <S.Box width={item.percent}>
            <div>
           <span> {item.percent}</span>
           </div>
          </S.Box>
        </S.Container>
      ))}
    </S.Skills>
  );
}
