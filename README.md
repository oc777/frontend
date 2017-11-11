# Up and running
Installera dependencies: `npm install`

Starta dev server: `ǹpm start`

Lyssna efter förändringar för att automatisk bygga en bundle: `npm run bundle`


# Eslint
Har lagt till en eslint config som bygger på airbnb config. Airbnb's style guide
är den mest respekterade inom react communityt, generellt så bygger den på JS features
upp till ES7. Kolla så så att eran linter i er IDE har stöd för eslint. Finns även
bra plugins till bl.a Atom som fixar lint fel automatiskt varje gång man sparar.
Lintern tvingar singleqiote (') så ni kan kolla om den fungerar genom att lägga till
ett dubblequote (") någonstans och se om den reagerar på det, gör den inte det så
kan det hända att ni måste installera ett ESlint plugin till er IDE.

# Nuvarande React stack
- React
- ReactDom
- Styled Components
- React Router

Note: React router har genomgått ganska stora förändringar senaste tiden så om ni undrar nått om det så kan ni fråga mig eller googla "react router version 4".
(finns mycket information på google om gamla versioner, så lätt man läser om fel)

# Module loaders
- Webpack

Configured features
- Transpilerar JSX till JavaScript
- Hotreloading
- Auto reloading
- Web server
- Babel, JS till es2015
- Accpeterar import av .jsx filer
- Babel, Support för class transform properties (ES7)
- Bygger bundle redå för produktion.

# Generell Applikations struktur & info.
Har har försökt sätta upp en grund / exempel componentet så snarlik som jag brukar göra det som möjligt. - Följer alla "best practices" inom React communityt som jag känner till.

## Folder Struktur

*Routes ->* Routes

*constants ->* Konstanter främst för CSS, fonts, färger etc för att underlätta att alla använder samma fonter, färg schema etc
*elements ->* Specifik för styled-components projekt. Innehåller komponenter som endast håller styles för ett specifikt html element (se mapp för exempel)

*components, containers och pages ->* Ska försöka förklara detta på ett bra sätt. Börja med att kolla: https://reactjs.org/docs/thinking-in-react.html pages är hela sidor som användes i routes. Dessa kan vara antingen class components eller stateless components. containers innehåller i normala fall class components som ligger lägre i hirarkin än pages. men eftersom vi ev. kommer behöva lägg till redux så tror jag det bliv enklast om vi bara kör pages som class components - så container ligger endast med som exempel. components innehåller endast stateless components, varje sub-folder har en index fil som är stateless component medans resterande filed är styled-components som är specifika för index.

## Struktur i filer

*PropTypes ->* Defineras som ett object ovanför komponenten för att göra det enkelt att se typer i stora komponenter. Sedan setts propTypes längst ner i filen precis innan export (se LoginForm för exempel)


*Object destructuring ->* används för props, för att jag dem mer lätt använda (se SubmitButton för exempel)


*Arrow functions ->* används för att slippa binda this i class componets (se LoginPage)

*ES7 class properties ->* används för att slippa constructor (se LoginPage)

*.jsx extensions ->* används för att tydligt visa vilka filer som är komponenter och vilka som är vanilla js.

## Exempel

Hur man förlänger en annan komponent med styled components -> se MenuItem

Hur man använder props i styled components -> se Text
