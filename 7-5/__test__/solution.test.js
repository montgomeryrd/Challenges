'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let test1 = 'lafbcakeaajfkjeggcimcbimmjalkfimcigihhhefkflkamcfmigkbllfaafkhghkiakigdlgmhmedfjbkkbhkblammecckiejabimcbbghahglmleldaidhfabckgkfmldadgaeikfihjfccjlahafehgkabfjkecehejgiafajfcfikglfjigjjdlfbkfljkflefcgaclbiaikjmfcemlfcgbkchkbadhdjmggblcdmdqmifkbammdadahhakudaeadgdadkgbgjgkwhlggmkamkcemdgkjrgmlfhlaa';

    it('should return the numbers of errors found in the printer request', () => {
        expect(Solution(test1)).toEqual('4/298');
    });

    let test2 = 'bkcccecjhmcgffabcighibhfefailhhkmabhbfabijfflfgihbmkcfkabjaijfbljfmfjlbkgjidkcgcdbfegkbdhciiigbhblmebkdclaegbjclclfbhdceekagbkimjkhklegdcbchilmekiikhlhjalmkdijdagjdgddgfdlamegadlcggagicjlifgljmeegadfdlkjhidgfmfldhiblhclmmdickgeifimigabjlcjeiggbgdgekemkkehjihkmljggemflffimaaecibdeglgkfffmadjekebjdehjmjfgiggmhijcggbfbhhbelgicbjkeehjehfbjaelacajedmlakdhaedkbbcicbjadbghhggghljdimffciekmdbehahibdfgimhikcjjjgjeahfdaealkbchffedlfjelaifdlabihdgcbebkdjhljeldhcdffghdbhiciefcbfmbmmklmgidkejfkcgmkgaicleeelcgggidleghfrldfiadkjkkffjgafsgidkbakbkjicdlilycjbcklamjjjijjmlybiahjcilbfajbdbhwllhgkbekllehkkbfrfdmemlhdlliklkdarfgheecajbkecchgexleglddbdfjmelaeioihgmfamidbegiigjxiiidhhkbafhfbehj'

    it('should return the numbers of errors found in the printer request', () => {
        expect(Solution(test2)).toEqual('10/680');
    });

    let test3 = 'hjkbddbgleldlmikbledjhfgehihglbdlgbeleghcgebhfehhilfddafbegdhhlghbklcglamfilbigeckeceggibbceeaecgaiimdkcfdegdibkdhdcmlebiffccmjkmdbgemkkkkimdjifchkhmemcfmgehkjbbgbiglmamckhfgbgegekjicbmlbkbfjmhecfjcflgccefkfmlhjbgekkhkdckkfklfamdlcdmhemkabmcdhdbcekcljbgfccjmegehgdlijcjcmbmmkbiddkclgaaamcemkgmcbgbmddlafmidfgckkgfghkchfildlbjkbjicfjmeeilmagekidgmbclgamackiidagammgbegagkelifeheakjhblleleabfjbjgajhmhebegjeahjcgjlkmfkgdjjbggdkcmlkjhahchldifhjcgijeggdhjjfhhabgdchbkiigagjfmcfeejhfhkmfcdjhhfjkhbdikafejbgiifaghdhdhhambjflgejhamjmejbffhmieajfelegkhfamhihkahceiffgecbaeijjllglkclacadfaccjllgffgkgkfifdbmhilcbkgdijmijkwjikhldmijmgjafaksicfedgdcjfgaejjfulhhjcckbfhcfmbfmwhikmddlfeggifaggtejahabdllhjecjmgxfchdlgghddihealjxhldkembhkdkidhbmtajljcijaijjmakbgokmbdkjjmfmlehjmjyfdfakahebhaefffbnklkemfjhjeefkfmir'

    it('should return the numbers of errors found in the printer request', () => {
        expect(Solution(test3)).toEqual('12/800');
    });

    let test4 = 'jflkgifciliicghljglkihhjjflcfmcklhidfmfhegabgebcibhlgcadimiahbecfcmdcfhcmdamkmeeddkjdkbmjfgldekejamleifhlaalmmadkgjdeifafikgallkfkieedefdmhfejjlcamecejajcimiggjljhihkembkkgdejgckjigkcdeacjbfbbclemgfkaakgcadklicmdhfmehkbaecifmaimfbclkigmdcbmbcjdlkjckdhegfhgdfmdilekhbjmlcecgfebcacdeljfjliegadiflgbdaldfaljdhdfkmkcbaeebkgagillamjbiikldllmjcahdflbmajfimecjfdjihmfjacehblbdfkbaafmhacmkcfahjmkeefiffgeeejekeaiehfblijkbjilgabbjdfmcaliiefhegakillfaagedaaicdambglibceajeihmahhiikdffcddkjlekgeafmdjiebfibidcmilhiklaebaamdehkddffbeljelkjkalkflgdfmgilfjffejdmhhiagdedcfmlheiedhjceckejbmhbeehihbhabcgjcckeehebcdicdigmdmdfhiiakkddaebaagdcbhkkkfjkbmhajghbhbjjhldchmebfdjmhjjdhejlcggkdgilackdafgvjbhcdklikcfddgbenkhgeiegkfdafkcgenccacaaeihjgmcaakygbiggiclhlaiijggsaimibdegmjmiikjdoiafdihhlcjgdhlceokjaifccdgjjahdfdrfhijkgffjaadjjlepmgigflibcdbhigecnbfklifidlgjmllfkzhckliafchggjlaalwaahikcefbfimbfdfzlbdbmfemechijgmatjdkl'

    it('should return the numbers of errors found in the printer request', () => {
        expect(Solution(test4)).toEqual('14/906');
    });

    let test5 = 'ffdglfllccklekbhkelaikhlfglimafjicjjbjhabijicgiidbhbhmlklchgcekeaceiejafhjielgmcjamkddelidekblclkajacmldkcafhigcccjiklhogdjdmeflcbhhilgcpbgmlkljijfkdiic'

    it('should return the numbers of errors found in the printer request', () => {
        expect(Solution(test5)).toEqual('2/152');
    });
});