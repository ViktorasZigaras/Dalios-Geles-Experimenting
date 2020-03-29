import React/*, { PureComponent }*/ from 'react'
import { connect } from 'react-redux'
import Actions from '../../redux/actions'
import '../sass/list.sass'

const List = ( props ) => {
    if ( state.distributedListStructures.length === 0 ) json( props )
    return drawList( props )   
}  

const drawList = ( props ) => {
    return (
        <div className="list-container">
            { state.distributedListStructures[ props.selectedList ] } 
        </div>
    )
}

const groups = [ 
    [ 'A', 'B' ], 
    [ 'C', 'D' ], 
    [ 'E', 'F', 'G', 'H' ], 
    [ 'I', 'J', 'K', 'L', 'M' ], 
    [ 'N', 'O', 'P', 'Q' ], 
    [ 'R', 'S' ], 
    [ 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ] 
]

const json = ( props ) => {
    fetch( './daylily.json' ).then( ( responseObj ) => { return responseObj.json( ) } )
    .then( ( file ) => {
            state.itemList = file
            // console.log( file )
            const lists = [ [ ], [ ], [ ], [ ], [ ], [ ], [ ] ]
            state.itemList.forEach( 
                ( entry ) => { 
                    if ( groups[0].includes( entry.group ) ) lists[0].push( entry )
                    else if ( groups[1].includes( entry.group ) ) lists[1].push( entry )
                    else if ( groups[2].includes( entry.group ) ) lists[2].push( entry )
                    else if ( groups[3].includes( entry.group ) ) lists[3].push( entry )
                    else if ( groups[4].includes( entry.group ) ) lists[4].push( entry )
                    else if ( groups[5].includes( entry.group ) ) lists[5].push( entry )
                    else if ( groups[6].includes( entry.group ) ) lists[6].push( entry )
                }
            )
            state.distributedLists = lists
            const structures = []
            let url1 = ''
            let url2 = ''
            structures.push( infoContent )
            lists.forEach( 
                ( category ) => { 
                    let html = [ ]
                    category.forEach( 
                        ( item ) => {
                            url1 = `../assets/${ item.img }-1.jpg`
                            url2 = `../assets/${ item.img }-2.jpg`
                            // url1 = `../pictures/daylily/${ item.img }-1.jpg`
                            // url2 = `../pictures/daylily/${ item.img }-2.jpg`
                            html.push(
                                <div className="list-item">
                                    
                                    <div className="list-images">
                                        <a href={ url1 } target="_blank">
                                            <img src={ url1 }></img>
                                        </a>
                                        <a href={ url2 } target="_blank">
                                            <img src={ url2 }></img>
                                        </a>
                                    </div>
                                    

                                    <div className="list-item-details">
                                        <div className="list-item-title">
                                            { item.name }
                                        </div>
                                        <div className="list-item-extra">
                                            { item.extra } &nbsp;
                                        </div>
                                        <div className="list-item-info">
                                            Aukštis { item.height } cm &nbsp; ⵁ { item.radius } cm
                                        </div>
                                        <div className="list-item-price">
                                            Kaina { item.price } €
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        }
                    )
                    structures.push( html )
                }
            )
            state.distributedListStructures = structures
            //force update after file was loaded for the first time
            props[ 'setSelectedList' ]( 0 ) 
        }
    )    
}

const infoContent = 
    <div className="info-content">
        <h3>
            Apie mus
        </h3>
        <p>
            Jau daug metų kolekcionuoju vilkdalgius ir viendienes. Seniai užsiimu vilkdalgių kryžminimu ir gaunu įdomių sėjinukų, kurie yra daug atsparesni mūsų žiemoms. Neseniai pradėjau kryžminti ir viendienes. Jau turiu gražių sėjinukų, šiuo metu juos dauginu. Siūlau susipažinti su dalimi savo kolekcijos. Rekomenduoju auginti vilkdalgius ir viendienes, nes tai gražios gėlės. Jeigu auginsite žemaūgius, vidutinio ūgio ar aukštaūgius vilkdalgius, tai jų žydėjimas tęsis nuo gegužės iki birželio mėnesio pabaigos. O jeigu auginsite ir viendienes, tai visą vasarą darželyje turėsite gražių gėlių.
        </p>
        <h4>
            Nedelskite su užsakymais, nes kai kurių veislių kiekis ribotas. Viendienėms užsakymai priimami iki rugsėjo 30 d., vilkdalgiams - iki rugpjūčio 31 d.
        </h4>

        <h3>
            Viendienės (Hemerocallis)
        </h3>
        <p>
            Viendienės (Hemerocallis) - daugiametės gėlės. Tai labai nereiklūs augalai, gerai auga ir žydi saulėtoje ir pavėsingoje vietoje bet kokioje dirvoje. Žmonės jas vadina "tinginių gėle". Vienoje vietoje gali augti 10 metų ir ilgiau. Nors žiedas žydi vieną dieną, bet žiedai skleidžiasi vieni po kitų sudarydami žiedais apsipylusį krūmelį. Žydi nuo liepos iki rugpjūčio pabaigos. Tai labai dekoratyvūs augalai, žiedų spalvų įvairovė didžiulė, nuo baltos iki beveik juodos, yra su skirtingų spalvų centrais, garbanotų, įvairių žiedo formų. Aš užsiimu viendienių selekcija, gaunu neblogų sėjinukų, kuriuos dauginu, ateityje bus pardavime. Kolekcija papildoma kasmet. Daug veislių šiuo metu yra dauginama. Viendienėmis prekiaujame nuo balandžio iki rugsėjo pabaigos. Kai kurių veislių kiekis yra ribotas. Parduodami tik tie augalai, prie kurių yra kaina. ⵁ reiškia žiedo plotį.
        </p>

        <h3>
            Kontaktai
        </h3>
        <p>
            Užsakytas gėles siunčiame nuo gegužės mėnesio. Mažiausia užsakomų gėlių kaina - 15 €. Į siuntinį įdėsime sąskaitą už gėles ir pašto išlaidas, kurios būna 3,5 € - 4,0 € priklausomai nuo siuntinio svorio. Atsiskaityti galima sinčiant pašto perlaidą arba pervedant pinigus į banko sąskaitą. Iš anksto pinigų neimame, nes pasitikime gėlininkų sąžiningumu.
        </p>
        <h4>
            Vilkdalgiams užsakymai priimami iki rugpjūčio 31 d., viendienėms - iki rugsėjo 30 d.
        </h4>

        <p>
            Užsakymų pateikimo būdai:
        </p>
        <ol>
            <li>
                elektroniniu paštu dalia@daliosgeles.lt;
            </li>
            <li>
                paskambinus telefonu +370 619 18222;
            </li>
            <li>
                [[elektroninis krepselis - coming soon]];
            </li>
        </ol>

        <p>
            Užsakydami gėles:
        </p>
        <ol>
            <li>
                nurodykite, koks atsiskaitymo būdas Jums yra patogesnis, tada rekvizitus įdėsime į siuntinį kartu su sąskaita;
            </li>
            <li>
                sudarykite sąrašą, nurodydami veislės pavadinimą, sodinukų kiekį ir kainą;
            </li>
            <li>
                parašykite savo adresą ir telefono numerį;
            </li>
        </ol>
        <h4>
            Mobilus telefonas: +370 619 18222, El. paštas: dalia@daliosgeles.lt
        </h4>
        
    </div>

const state = {
    itemList: [ ],
    distributedLists: [ ],
    distributedListStructures: [ ],
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        setSelectedList: ( item ) => dispatch( Actions.setSelectedList ( item ) ),
    }
}
  
const mapStateToProps = ( state ) => {
    return {
        selectedList: state.selectedList,
    }
}
  
export default connect( mapStateToProps, mapDispatchToProps )( List )