// #1

// let numbers = prompt("Numbers");

// let rawNumbersArr = numbers.split(" ");
// let numbersArr = [];

// for (let i = 0; i < rawNumbersArr.length; i++) {
//     if (rawNumbersArr[i] % 2 == 0) {
//         numbersArr.push(parseInt(rawNumbersArr[i]));
//     }
// }

// console.log(numbersArr);

// #2

// let numbers = prompt("Numbers");

// let rawNumbersArr = numbers.split(" ");
// let numbersArr = [];

// for (let i = rawNumbersArr.length - 1; i >= 0; i--) {
//     numbersArr.push(rawNumbersArr[i]);
// }

// console.log(numbersArr);

// #3

const posts = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body:
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body:
            "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
        userId: 1,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body:
            "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
        userId: 1,
        id: 7,
        title: "magnam facilis autem",
        body:
            "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
    {
        userId: 1,
        id: 8,
        title: "dolorem dolore est ipsam",
        body:
            "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
        userId: 1,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body:
            "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    },
    {
        userId: 1,
        id: 10,
        title: "optio molestias id quia eum",
        body:
            "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    },
    {
        userId: 2,
        id: 11,
        title: "et ea vero quia laudantium autem",
        body:
            "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    },
    {
        userId: 2,
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body:
            "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    },
    {
        userId: 2,
        id: 13,
        title: "dolorum ut in voluptas mollitia et saepe quo animi",
        body:
            "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
    {
        userId: 2,
        id: 14,
        title: "voluptatem eligendi optio",
        body:
            "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    },
    {
        userId: 2,
        id: 15,
        title: "eveniet quod temporibus",
        body:
            "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    },
    {
        userId: 2,
        id: 16,
        title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
        body:
            "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    },
    {
        userId: 2,
        id: 17,
        title: "fugit voluptas sed molestias voluptatem provident",
        body:
            "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    },
    {
        userId: 2,
        id: 18,
        title: "voluptate et itaque vero tempora molestiae",
        body:
            "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
    },
    {
        userId: 2,
        id: 19,
        title: "adipisci placeat illum aut reiciendis qui",
        body:
            "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
    },
    {
        userId: 2,
        id: 20,
        title: "doloribus ad provident suscipit at",
        body:
            "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
    },
    {
        userId: 3,
        id: 21,
        title: "asperiores ea ipsam voluptatibus modi minima quia sint",
        body:
            "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
    },
    {
        userId: 3,
        id: 22,
        title: "dolor sint quo a velit explicabo quia nam",
        body:
            "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
    },
    {
        userId: 3,
        id: 23,
        title: "maxime id vitae nihil numquam",
        body:
            "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
    },
    {
        userId: 3,
        id: 24,
        title: "autem hic labore sunt dolores incidunt",
        body:
            "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
    },
    {
        userId: 3,
        id: 25,
        title: "rem alias distinctio quo quis",
        body:
            "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
    },
    {
        userId: 3,
        id: 26,
        title: "est et quae odit qui non",
        body:
            "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero",
    },
    {
        userId: 3,
        id: 27,
        title: "quasi id et eos tenetur aut quo autem",
        body:
            "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
    },
    {
        userId: 3,
        id: 28,
        title: "delectus ullam et corporis nulla voluptas sequi",
        body:
            "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum",
    },
    {
        userId: 3,
        id: 29,
        title: "iusto eius quod necessitatibus culpa ea",
        body:
            "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores",
    },
    {
        userId: 3,
        id: 30,
        title: "a quo magni similique perferendis",
        body:
            "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia",
    },
    {
        userId: 4,
        id: 31,
        title: "ullam ut quidem id aut vel consequuntur",
        body:
            "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae",
    },
    {
        userId: 4,
        id: 32,
        title: "doloremque illum aliquid sunt",
        body:
            "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
    },
    {
        userId: 4,
        id: 33,
        title: "qui explicabo molestiae dolorem",
        body:
            "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod",
    },
    {
        userId: 4,
        id: 34,
        title: "magnam ut rerum iure",
        body:
            "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis",
    },
    {
        userId: 4,
        id: 35,
        title: "id nihil consequatur molestias animi provident",
        body:
            "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit",
    },
    {
        userId: 4,
        id: 36,
        title: "fuga nam accusamus voluptas reiciendis itaque",
        body:
            "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore",
    },
    {
        userId: 4,
        id: 37,
        title: "provident vel ut sit ratione est",
        body:
            "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui",
    },
    {
        userId: 4,
        id: 38,
        title: "explicabo et eos deleniti nostrum ab id repellendus",
        body:
            "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure",
    },
    {
        userId: 4,
        id: 39,
        title: "eos dolorem iste accusantium est eaque quam",
        body:
            "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex",
    },
    {
        userId: 4,
        id: 40,
        title: "enim quo cumque",
        body:
            "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam",
    },
    {
        userId: 5,
        id: 41,
        title: "non est facere",
        body:
            "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe",
    },
    {
        userId: 5,
        id: 42,
        title: "commodi ullam sint et excepturi error explicabo praesentium voluptas",
        body:
            "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut",
    },
    {
        userId: 5,
        id: 43,
        title: "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
        body:
            "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis",
    },
    {
        userId: 5,
        id: 44,
        title: "optio dolor molestias sit",
        body:
            "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae",
    },
    {
        userId: 5,
        id: 45,
        title: "ut numquam possimus omnis eius suscipit laudantium iure",
        body:
            "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem",
    },
    {
        userId: 5,
        id: 46,
        title: "aut quo modi neque nostrum ducimus",
        body:
            "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid",
    },
    {
        userId: 5,
        id: 47,
        title: "quibusdam cumque rem aut deserunt",
        body:
            "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate",
    },
    {
        userId: 5,
        id: 48,
        title: "ut voluptatem illum ea doloribus itaque eos",
        body:
            "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit",
    },
    {
        userId: 5,
        id: 49,
        title: "laborum non sunt aut ut assumenda perspiciatis voluptas",
        body:
            "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
    },
    {
        userId: 5,
        id: 50,
        title: "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
        body:
            "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur",
    },
    {
        userId: 6,
        id: 51,
        title: "soluta aliquam aperiam consequatur illo quis voluptas",
        body:
            "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem",
    },
    {
        userId: 6,
        id: 52,
        title: "qui enim et consequuntur quia animi quis voluptate quibusdam",
        body:
            "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum",
    },
    {
        userId: 6,
        id: 53,
        title: "ut quo aut ducimus alias",
        body:
            "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique",
    },
    {
        userId: 6,
        id: 54,
        title: "sit asperiores ipsam eveniet odio non quia",
        body:
            "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia",
    },
    {
        userId: 6,
        id: 55,
        title: "sit vel voluptatem et non libero",
        body:
            "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit",
    },
    {
        userId: 6,
        id: 56,
        title: "qui et at rerum necessitatibus",
        body:
            "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi",
    },
    {
        userId: 6,
        id: 57,
        title: "sed ab est est",
        body:
            "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est",
    },
    {
        userId: 6,
        id: 58,
        title: "voluptatum itaque dolores nisi et quasi",
        body:
            "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam",
    },
    {
        userId: 6,
        id: 59,
        title: "qui commodi dolor at maiores et quis id accusantium",
        body:
            "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt",
    },
    {
        userId: 6,
        id: 60,
        title: "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
        body:
            "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis",
    },
    {
        userId: 7,
        id: 61,
        title: "voluptatem doloribus consectetur est ut ducimus",
        body:
            "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit",
    },
    {
        userId: 7,
        id: 62,
        title: "beatae enim quia vel",
        body:
            "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio",
    },
    {
        userId: 7,
        id: 63,
        title: "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
        body:
            "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta",
    },
    {
        userId: 7,
        id: 64,
        title: "et fugit quas eum in in aperiam quod",
        body:
            "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui",
    },
    {
        userId: 7,
        id: 65,
        title: "consequatur id enim sunt et et",
        body:
            "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur",
    },
    {
        userId: 7,
        id: 66,
        title: "repudiandae ea animi iusto",
        body:
            "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe",
    },
    {
        userId: 7,
        id: 67,
        title: "aliquid eos sed fuga est maxime repellendus",
        body:
            "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae",
    },
    {
        userId: 7,
        id: 68,
        title: "odio quis facere architecto reiciendis optio",
        body:
            "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit",
    },
    {
        userId: 7,
        id: 69,
        title: "fugiat quod pariatur odit minima",
        body:
            "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a",
    },
    {
        userId: 7,
        id: 70,
        title: "voluptatem laborum magni",
        body:
            "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore",
    },
    {
        userId: 8,
        id: 71,
        title: "et iusto veniam et illum aut fuga",
        body:
            "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis",
    },
    {
        userId: 8,
        id: 72,
        title: "sint hic doloribus consequatur eos non id",
        body:
            "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit",
    },
    {
        userId: 8,
        id: 73,
        title: "consequuntur deleniti eos quia temporibus ab aliquid at",
        body:
            "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut",
    },
    {
        userId: 8,
        id: 74,
        title: "enim unde ratione doloribus quas enim ut sit sapiente",
        body:
            "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora",
    },
    {
        userId: 8,
        id: 75,
        title: "dignissimos eum dolor ut enim et delectus in",
        body:
            "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem",
    },
    {
        userId: 8,
        id: 76,
        title: "doloremque officiis ad et non perferendis",
        body:
            "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio",
    },
    {
        userId: 8,
        id: 77,
        title: "necessitatibus quasi exercitationem odio",
        body:
            "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident",
    },
    {
        userId: 8,
        id: 78,
        title: "quam voluptatibus rerum veritatis",
        body:
            "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus",
    },
    {
        userId: 8,
        id: 79,
        title: "pariatur consequatur quia magnam autem omnis non amet",
        body:
            "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos",
    },
    {
        userId: 8,
        id: 80,
        title: "labore in ex et explicabo corporis aut quas",
        body:
            "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident",
    },
    {
        userId: 9,
        id: 81,
        title: "tempora rem veritatis voluptas quo dolores vero",
        body:
            "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut",
    },
    {
        userId: 9,
        id: 82,
        title: "laudantium voluptate suscipit sunt enim enim",
        body:
            "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic",
    },
    {
        userId: 9,
        id: 83,
        title: "odit et voluptates doloribus alias odio et",
        body:
            "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam",
    },
    {
        userId: 9,
        id: 84,
        title: "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
        body:
            "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio",
    },
    {
        userId: 9,
        id: 85,
        title: "dolore veritatis porro provident adipisci blanditiis et sunt",
        body:
            "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione",
    },
    {
        userId: 9,
        id: 86,
        title: "placeat quia et porro iste",
        body:
            "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio",
    },
    {
        userId: 9,
        id: 87,
        title: "nostrum quis quasi placeat",
        body:
            "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est",
    },
    {
        userId: 9,
        id: 88,
        title: "sapiente omnis fugit eos",
        body:
            "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed",
    },
    {
        userId: 9,
        id: 89,
        title: "sint soluta et vel magnam aut ut sed qui",
        body:
            "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est",
    },
    {
        userId: 9,
        id: 90,
        title: "ad iusto omnis odit dolor voluptatibus",
        body:
            "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis",
    },
    {
        userId: 10,
        id: 91,
        title: "aut amet sed",
        body:
            "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat",
    },
    {
        userId: 10,
        id: 92,
        title: "ratione ex tenetur perferendis",
        body:
            "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui",
    },
    {
        userId: 10,
        id: 93,
        title: "beatae soluta recusandae",
        body:
            "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla",
    },
    {
        userId: 10,
        id: 94,
        title: "qui qui voluptates illo iste minima",
        body:
            "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis",
    },
    {
        userId: 10,
        id: 95,
        title: "id minus libero illum nam ad officiis",
        body:
            "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt",
    },
    {
        userId: 10,
        id: 96,
        title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
        body:
            "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut",
    },
    {
        userId: 10,
        id: 97,
        title: "quas fugiat ut perspiciatis vero provident",
        body:
            "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam",
    },
    {
        userId: 10,
        id: 98,
        title: "laboriosam dolor voluptates",
        body:
            "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores",
    },
    {
        userId: 10,
        id: 99,
        title: "temporibus sit alias delectus eligendi possimus magni",
        body:
            "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia",
    },
    {
        userId: 10,
        id: 100,
        title: "at nam consequatur ea labore ea harum",
        body:
            "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut",
    },
];

// let sortedPosts = [];

// for (let i = 0; i < posts.length; i++) {
//     if (posts[i]["userId"] == 1) {
//         sortedPosts.push(posts[i]);
//     }
// }

// console.log(sortedPosts);

const products = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 },
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 4.7, count: 500 },
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: { rate: 2.1, count: 430 },
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.6, count: 400 },
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3.9, count: 70 },
    },
    {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3, count: 400 },
    },
    {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 1.9, count: 100 },
    },
    {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: { rate: 3.3, count: 203 },
    },
    {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 470 },
    },
    {
        id: 11,
        title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 319 },
    },
    {
        id: 12,
        title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 400 },
    },
    {
        id: 13,
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 250 },
    },
    {
        id: 14,
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: { rate: 2.2, count: 140 },
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: { rate: 2.6, count: 235 },
    },
    {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: { rate: 2.9, count: 340 },
    },
    {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: { rate: 3.8, count: 679 },
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description:
            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: { rate: 4.7, count: 130 },
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description:
            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: { rate: 4.5, count: 146 },
    },
    {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: { rate: 3.6, count: 145 },
    },
];

let sortedProducts = [];

let firstPrice = +prompt("First Price");
let secondPrice = +prompt("Second Price");

for (let i = 0; i < products.length; i++) {
    if (firstPrice < products[i]["price"] && products[i]["price"] < secondPrice) {
        sortedProducts.push(products[i]);
    }
}

console.log(sortedProducts);
