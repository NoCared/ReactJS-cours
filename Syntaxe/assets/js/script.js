// JS
const div = document.createElement("div");
div.textContent = "Hello World";
document.querySelector("#root").append(div);

// React
const root = ReactDOM.createRoot(document.querySelector("#root"));
const p = React.createElement("p", {}, "Bonjour Monde!");
root.render(p);

// Pour créer un component JSX j'utilise la syntaxe html dans du javascript
const h1 = <h1>Hello World</h1>;
root.render(h1);


let nom = "Julien";
const h2 = <h2>{nom}</h2>;
root.render(h2);
// en JSX je peux imbriquer n'importe quel component comme je le ferai en HTML
const nav = <nav>
    <ul>
        <li>Logo</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>

root.render(nav);

const menuEntries = ["Logo", "About", "Contact"];
//  com javascript
const nav2 = <nav>
    <ul className="menu">
        {/* ceci est un commentaire JSX,
            pas de foreach mais à la place map()
            Pour retourner à nouveau du JSX dans une callback
            je dois utiliser un return
        */}
        {
            menuEntries.map((element, index) => {
                return (<li key={index} className="element">{element}</li>);
            })
        }
    </ul>
</nav>
root.render(nav2);

// je peux créer sous forme de fonction des components
// chaque component doit s'écrire avec une capitale
const Card = () => {
    return (<div className="card">
        <img src="./assets/img/test.jp"></img>
        <p>lorem</p>
    </div>)
}
root.render(<Card></Card>);

//
class Footer extends React.Component {
    menuEntries = [];
    render() {
        return (
            <> {/*Je ne peux pas utiliser d'elements siblings
                à la racine d'un component mais uniquement des
                éléments imbriqués.
                Par contre je peux utiliser des éléments vides comme
                parents : <></>
            */}
                <div>
                    mes partenaires
                </div>
                <footer>
                    <p>footer</p>
                </footer>
            </>
        )
    }
}
root.render(<Footer></Footer>);