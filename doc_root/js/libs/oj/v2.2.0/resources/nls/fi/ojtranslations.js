define({"oj-message":{fatal:"Vakava",error:"Virhe",warning:"Varoitus",info:"Tiedot",confirmation:"Vahvistus","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Arvo ei ole odotetussa muodossa.",detail:"Syötä arvo odotetussa muodossa.","plural-separator":", ",hint:{summary:"Esimerkki: {exampleValue}",detail:"Syötä arvo tämän esimerkin mukaisessa muodossa: '{exampleValue}'","detail-plural":"Syötä arvo näiden esimerkkien mukaisessa muodossa: '{exampleValue}'"},optionHint:{detail:"Hyväksytty arvo valinnalle {propertyName} on {propertyValueValid}.",
"detail-plural":"Hyväksytyt arvot valinnalle {propertyName} ovat {propertyValueValid}."},optionTypesMismatch:{summary:"Arvo valinnalle {requiredPropertyName} on pakollinen, kun valinnaksi {propertyName} on määritetty {propertyValue}."},optionTypeInvalid:{summary:"Odotetun tyyppistä arvoa ei annettu valinnalle {propertyName}."},optionOutOfRange:{summary:"Arvo {propertyValue} ei ole valinnan {propertyName} alueella."},optionValueInvalid:{summary:"Virheellinen arvo {propertyValue} määritettiin valinnalle {propertyName}."},
number:{decimalFormatMismatch:{summary:"{value} ei ole odotetussa numeromuodossa."},decimalFormatUnsupportedParse:{summary:"decimalFormat: short ja long eivät ole tuettuja muunto-ohjelman jäsennyksessä.",detail:"Vaihda komponentiksi readOnly. readOnly-kentät eivät kutsu muunto-ohjelman jäsennystoimintoa."},currencyFormatMismatch:{summary:"{value} ei ole odotetussa valuuttamuodossa."},percentFormatMismatch:{summary:"{value} ei ole odotetussa prosenttimuodossa."}},datetime:{datetimeOutOfRange:{summary:"Arvo {value} ei ole kohteen {propertyName} alueella.",
detail:"Syötä arvo välillä {minValue} - {maxValue}."},dateFormatMismatch:{summary:"{value} ei ole odotetussa päivämäärämuodossa."},invalidTimeZoneID:{summary:"Annettu virheellinen aikavyöhykkeen tunnus {timeZoneID}."},nonExistingTime:{summary:"Syöteaikaa ei ole, koska se osuu kesäaikaan siirtymisen aikaan."},missingTimeZoneData:{summary:"Aikavyöhyketiedot puuttuvat. Kutsu vaadittu ojs/ojtimezonedata, jotta voit ladata aikavyöhyketiedot."},timeFormatMismatch:{summary:"{value} ei ole odotetussa aikamuodossa."},
datetimeFormatMismatch:{summary:"{value} ei ole odotetussa päivämäärä- ja aikamuodossa."},dateToWeekdayMismatch:{summary:"Päivämäärä {date} ei ole {weekday}.",detail:"Syötä päivämäärää vastaava viikonpäivä."}}},"oj-validator":{length:{hint:{min:"Syötä vähintään {min} merkkiä.",max:"Syötä enintään {max} merkkiä",inRange:"Syötä {min} - {max} merkkiä.",exact:"Syötä {length} merkkiä."},messageDetail:{tooShort:"Syötä vähintään {min} merkkiä, ei vähempää.",tooLong:"Syötä enintään {max} merkkiä, ei enempää."},
messageSummary:{tooShort:"Merkkejä on liian vähän.",tooLong:"Merkkejä on liian monta."}},range:{number:{hint:{min:"Syötä luku, joka on suurempi tai yhtä suuri kuin {min}.",max:"Syötä luku, joka on pienempi tai yhtä suuri kuin {max}.",inRange:"Syötä luku välillä {min} - {max}.",exact:"Syötä luku {num}."},messageDetail:{rangeUnderflow:"Luvun on oltava suurempi tai yhtä suuri kuin {min}.",rangeOverflow:"Luvun on oltava pienempi tai yhtä suuri kuin {max}.",exact:"Luvun on oltava {num}."},messageSummary:{rangeUnderflow:"Luku on liian pieni.",
rangeOverflow:"Luku on liian suuri."}},datetime:{hint:{min:"Syötä päivämäärä ja aika, joka on {min} tai sen jälkeen.",max:"Syötä päivämäärä ja aika, joka on {max} tai sitä ennen.",inRange:"Syötä päivämäärä välillä {min} - {max}."},messageDetail:{rangeUnderflow:"Päivämäärän ja ajan on oltava {min} tai sen jälkeen.",rangeOverflow:"Päivämäärän ja ajan on oltava {max} tai sitä ennen."},messageSummary:{rangeUnderflow:"Päivämäärä ja aika ovat ennen vähimmäispäivämäärää ja -aikaa.",rangeOverflow:"Päivämäärä ja aika ovat enimmäispäivämäärän ja -ajan jälkeen."}},
date:{hint:{min:"Syötä päivämäärä, joka on {min} tai myöhempi.",max:"Syötä päivämäärä, joka on {max} tai varhaisempi.",inRange:"Syötä päivämäärä väliltä {min} - {max}."},messageDetail:{rangeUnderflow:"Päivämäärän on oltava {min} tai sen jälkeen.",rangeOverflow:"Päivämäärän on oltava {max} tai ennen sitä."},messageSummary:{rangeUnderflow:"Päivämäärä on ennen vähimmäispäivämäärää.",rangeOverflow:"Päivämäärä on vähimmäispäivämäärän jälkeen."}},time:{hint:{min:"Syötä aika, joka on {min} tai myöhempi.",
max:"Syötä aika, joka on {max} tai varhaisempi.",inRange:"Syötä aika väliltä {min} - {max}."},messageDetail:{rangeUnderflow:"Ajan on oltava {min} tai sen jälkeen.",rangeOverflow:"Ajan on oltava {max} tai ennen sitä."},messageSummary:{rangeUnderflow:"Aika on ennen vähimmäisaikaa.",rangeOverflow:"Aika on vähimmäisajan jälkeen."}}},restriction:{date:{messageSummary:"Päivämäärä {value} on käytöstä poistettu kirjaus.",messageDetail:"Päivämäärä {value} ei saa olla käytöstä poistettu kirjaus."}},regExp:{summary:"Muoto on virheellinen.",
detail:"Arvon {value} on vastattava tätä mallia: {pattern}"},required:{summary:"Arvo vaaditaan.",detail:"Syötä arvo."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Edellinen",nextText:"Seuraava",currentText:"Tänään",weekHeader:"Viikko",tooltipCalendar:"Valitse päivämäärä",tooltipCalendarDisabled:"Valittu päivä poissa käytöstä",weekText:"Viikko",datePicker:"Päivämäärän valinta",inputHelp:"Avaa kalenteri painamalla ala- tai ylänuolta",inputHelpBoth:"Avaa kalenteri painamalla ala- tai ylänuolta ja avaa ajan avattava valikko painamalla vaihtonäppäintä sekä ala- tai ylänuolta",
dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Peruuta",okText:"OK",currentTimeText:"Nyt",hourWheelLabel:"Tunti",minuteWheelLabel:"Minuutti",ampmWheelLabel:"AP/IP",tooltipTime:"Valitse aika",tooltipTimeDisabled:"Valittu aika poissa käytöstä",inputHelp:"Avaa ajan avattava valikko painamalla ala- tai ylänuolta",
dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Arvon on vastattava tätä mallia: {pattern}"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"Seuraava sivu",labelAccArrowPreviousPage:"Edellinen sivu",tipArrowNextPage:"Seuraava",tipArrowPreviousPage:"Edellinen"},"oj-ojDataGrid":{accessibleSortAscending:"{id} lajiteltu nousevaan järjestykseen",
accessibleSortDescending:"{id} lajiteltu laskevaan järjestykseen",accessibleActionableMode:"Siirry toiminnalliseen tilaan",accessibleNavigationMode:"Siirry navigointitilaan. Siirry muokkaus- tai toiminnalliseen tilaan painamalla F2-näppäintä",accessibleEditableMode:"Siirry muokkaustilaan. Siirry tietoruudukon ulkopuolelle painamalla ESC-näppäintä",accessibleSummaryExact:"Tämä on tietoruudukko, jossa on {rownum} riviä ja {colnum} saraketta",accessibleSummaryEstimate:"Tämä on tietoruudukko, jonka rivien ja sarakkeiden määrää ei tiedetä",
accessibleSummaryExpanded:"{num} riviä on laajennettu",accessibleRowExpanded:"Rivi laajennettu",accessibleRowCollapsed:"Rivi tiivistetty",accessibleRowSelected:"Rivi {row} valittu",accessibleColumnSelected:"Sarake {column} valittu",accessibleStateSelected:"valittu",accessibleMultiCellSelected:"{num} solua valittu",accessibleRowContext:"Rivi {index}",accessibleColumnContext:"Sarake {index}",accessibleRowHeaderContext:"Riviotsikko {index}",accessibleColumnHeaderContext:"Sarakeotsikko {index}",accessibleRowEndHeaderContext:"Rivinpäätösotsikko {index}",
accessibleColumnEndHeaderContext:"Sarakkeenpäätösotsikko {index}",accessibleLevelContext:"Taso {level}",accessibleRangeSelectModeOn:"Lisää valittu soluväli -tila käytössä",accessibleRangeSelectModeOff:"Lisää valittu soluväli -tila poissa käytöstä",accessibleFirstRow:"Olet ensimmäisellä rivillä",accessibleLastRow:"Olet viimeisellä rivillä",accessibleFirstColumn:"Olet ensimmäisessä sarakkeessa",accessibleLastColumn:"Olet viimeisessä sarakkeessa",accessibleSelectionAffordanceTop:"Ylävalintakahva",accessibleSelectionAffordanceBottom:"Alavalintakahva",
msgFetchingData:"Haetaan tietoja...",msgNoData:"Ei näytettäviä alkioita.",labelResize:"Muuta kokoa",labelResizeWidth:"Muuta leveyttä",labelResizeHeight:"Muuta korkeutta",labelSortRow:"Lajittele rivi",labelSortRowAsc:"Lajittele rivi nousevaan järjestykseen",labelSortRowDsc:"Lajittele rivi laskevaan järjestykseen",labelSortCol:"Lajittele sarake",labelSortColAsc:"Lajittele sarake nousevaan järjestykseen",labelSortColDsc:"Lajittele sarake laskevaan järjestykseen",labelCut:"Leikkaa",labelPaste:"Liitä",
labelEnableNonContiguous:"Ota käyttöön epäjatkuva valinta",labelDisableNonContiguous:"Poista käytöstä epäjatkuva valinta",labelResizeDialogSubmit:"OK"},"oj-ojRowExpander":{accessibleLevelDescription:"Taso {level}",accessibleRowDescription:"Taso {level}, rivi {num}/{total}",accessibleRowExpanded:"Rivi laajennettu",accessibleRowCollapsed:"Rivi tiivistetty",accessibleStateExpanded:"laajennettu",accessibleStateCollapsed:"tiivistetty"},"oj-ojListView":{msgFetchingData:"Haetaan tietoja...",msgNoData:"Ei näytettäviä alkioita.",
indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|Å|Ä|Ö",accessibleReorderTouchInstructionText:"Kaksoisnapauta ja pidä. Odota äänimerkkiä ja järjestä sitten uudelleen vetämällä.",accessibleReorderBeforeItem:"Ennen {item}",accessibleReorderAfterItem:"Jälkeen {item}",accessibleReorderInsideItem:"Sisään {item}",labelCut:"Leikkaa",labelCopy:"Kopioi",labelPaste:"Liitä",labelPasteBefore:"Liitä eteen",labelPasteAfter:"Liitä jälkeen"},"oj-_ojLabel":{tooltipHelp:"Ohje",tooltipRequired:"Pakollinen"},
"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Vähennys",tooltipIncrement:"Lisäys"},"oj-ojTable":{labelAccSelectionAffordanceTop:"Ylävalintakahva",labelAccSelectionAffordanceBottom:"Alavalintakahva",labelEnableNonContiguousSelection:"Ota käyttöön epäjatkuva valinta",labelDisableNonContiguousSelection:"Poista käytöstä epäjatkuva valinta",labelSelectRow:"Valitse rivi",
labelEditRow:"Muokkaa riviä",labelSelectAndEditRow:"Valitse rivi ja muokkaa sitä",labelSelectColumn:"Valitse sarake",labelSort:"Lajittele",labelSortAsc:"Nouseva järjestys",labelSortDsc:"Laskeva järjestys",msgFetchingData:"Haetaan tietoja...",msgNoData:"Näytettäviä tietoja ei ole."},"oj-ojTabs":{labelCut:"Leikkaa",labelPasteBefore:"Liitä eteen",labelPasteAfter:"Liitä jälkeen",labelRemove:"Poista",labelReorder:"Järjestä uudelleen",removeCueText:"Poistettava"},"oj-ojSelect":{searchField:"Hakukenttä",
noMatchesFound:"Vastineita ei löydy",oneMatchesFound:"Yksi vastaavuus löydettiin",moreMatchesFound:"{num} vastineita löytyi"},"oj-ojSwitch":{SwitchON:"Käytössä",SwitchOFF:"Ei käytössä"},"oj-ojCombobox":{noMatchesFound:"Vastineita ei löydy"},"oj-ojInputSearch":{noMatchesFound:"Vastineita ei löydy"},"oj-ojTree":{stateLoading:"Ladataan...",labelNewNode:"Uusi solmu",labelMultiSelection:"Useita valintoja",labelEdit:"Muokkaa",labelCreate:"Luo",labelCut:"Leikkaa",labelCopy:"Kopioi",labelPaste:"Liitä",labelRemove:"Poista",
labelRename:"Nimeä uudelleen",labelNoData:"Ei tietoja"},"oj-ojPagingControl":{labelAccPaging:"Sivutus",labelAccNavFirstPage:"Ensimmäinen sivu",labelAccNavLastPage:"Viimeinen sivu",labelAccNavNextPage:"Seuraava sivu",labelAccNavPreviousPage:"Edellinen sivu",labelAccNavPage:"Sivu",labelLoadMore:"Näytä lisää...",labelLoadMoreMaxRows:"Saavutettu {maxRows} riviä enimmäisrajasta",labelNavInputPage:"Sivu",labelNavInputPageMax:"/{pageMax}",msgItemRangeCurrent:"{pageFrom} - {pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",
msgItemRangeOf:"/",msgItemRangeOfAtLeast:"vähintään",msgItemRangeOfApprox:"n.",msgItemRangeItems:"alkiota",tipNavInputPage:"Sivulle",tipNavPageLink:"Siirry sivulle {pageNum}",tipNavNextPage:"Seuraava",tipNavPreviousPage:"Edellinen",tipNavFirstPage:"Ensimmäinen",tipNavLastPage:"Viimeinen",pageInvalid:{summary:"Syötetty sivun arvo on virheellinen.",detail:"Syötä nollaa suurempi arvo."},maxPageLinksInvalid:{summary:"Kohteen maxPageLinks arvo on virheellinen.",detail:"Syötä neljää suurempi arvo."}},"oj-ojMasonryLayout":{labelCut:"Leikkaa",
labelPasteBefore:"Liitä eteen",labelPasteAfter:"Liitä jälkeen"},"oj-panel":{labelAccButtonExpand:"Laajenna",labelAccButtonCollapse:"Tiivistä",labelAccButtonRemove:"Poista"},"oj-ojChart":{labelDefaultGroupName:"Ryhmä {0}",labelSeries:"Sarja",labelGroup:"Ryhmä",labelDate:"Päivämäärä",labelValue:"Arvo",labelTargetValue:"Kohde",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Prosenttiosuus",labelLow:"Pieni",labelHigh:"Suuri",labelOpen:"Avaa",labelClose:"Sulje",labelVolume:"Määrä",labelQ1:"Q1",labelQ2:"Q2",
labelQ3:"Q3",labelMin:"Vähintään",labelMax:"Enintään",labelOther:"Muu",tooltipPan:"Panoroi",tooltipSelect:"Alueen valinta",tooltipZoom:"Zoomausvalinta",componentName:"Kaavio"},"oj-dvtBaseGauge":{componentName:"Mittari"},"oj-ojDiagram":{promotedLink:"{0} linkki",promotedLinks:"{0} linkkiä",promotedLinkAriaDesc:"Epäsuora",componentName:"Kaavio"},"oj-ojGantt":{componentName:"Gantt-kaavio",accessibleDurationDays:"{0} päivää",accessibleDurationHours:"{0} tuntia",accessibleTaskInfo:"Aloitusaika on {0}, lopetusaika on {1}, kesto on {2}",
accessibleMilestoneInfo:"Aika on {0}",accessibleRowInfo:"Rivi {0}",tooltipZoomIn:"Lähennä",tooltipZoomOut:"Loitonna"},"oj-ojLegend":{componentName:"Selite"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Muu",labelGroup:"Ryhmä",labelSize:"Koko",labelAdditionalData:"Lisätiedot",componentName:"9 ruudun kaavio"},"oj-ojPictoChart":{componentName:"Kuvakaavio"},"oj-ojSparkChart":{componentName:"Kaavio"},"oj-ojSunburst":{labelColor:"Väri",labelSize:"Koko",componentName:"Aurinko"},"oj-ojTagCloud":{componentName:"Tunnistepilvi"},
"oj-ojThematicMap":{componentName:"Teemakartta"},"oj-ojTimeAxis":{componentName:"Aika-akseli"},"oj-ojTimeline":{componentName:"Aikajana",labelSeries:"Sarja",tooltipZoomIn:"Lähennä",tooltipZoomOut:"Loitonna"},"oj-ojTreemap":{labelColor:"Väri",labelSize:"Koko",tooltipIsolate:"Eristä",tooltipRestore:"Palauta",componentName:"Puukartta"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"tuhat",labelScalingSuffixMillion:"milj.",labelScalingSuffixBillion:"mrd.",labelScalingSuffixTrillion:"bilj.",labelScalingSuffixQuadrillion:"kvadr.",
labelInvalidData:"Virheelliset tiedot",labelNoData:"Ei näytettäviä tietoja",labelClearSelection:"Tyhjennä valinnat",labelDataVisualization:"Tietojen visualisointi",stateSelected:"Valittu",stateUnselected:"Valitsematon",stateMaximized:"Suurennettu",stateMinimized:"Pienennetty",stateExpanded:"Laajennettu",stateCollapsed:"Tiivistetty",stateIsolated:"Eristetty",stateHidden:"Piilotettu",stateVisible:"Näkyvä",stateDrillable:"Siirryttävä",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0}/{1}"},"oj-ojNavigationList":{defaultRootLabel:"Navigointilista",
hierMenuBtnLabel:"Hierarkkinen valikkopainike",selectedLabel:"valittu",previousIcon:"Edellinen",msgFetchingData:"Haetaan tietoja...",msgNoData:"Ei näytettäviä alkioita."},"oj-ojSlider":{noValue:"ojSlider ei sisällä arvoa",maxMin:"Enintään ei voi olla pienempi kuin vähintään",valueRange:"Arvon on oltava enintään-vähintään-alueella",optionNum:"Valinta {option} ei ole luku",invalidStep:"Virheellinen vaihe. Vaiheen on oltava yli 0"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Siirrytään kohovalikkoon. F6-näppäimellä voit vaihdella kohovalikon ja siihen liittyvän ohjaimen välillä.",
ariaLiveRegionInitialFocusNone:"Kohovalikko avattu. F6-näppäimellä voit vaihdella kohovalikon ja siihen liittyvän ohjaimen välillä.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Siirrytään kohovalikkoon. Voit sulkea kohovalikon siirtymällä sen viimeisimpään linkkiin.",ariaLiveRegionInitialFocusNoneTouch:"Kohovalikko avattu. Kohdista kohovalikossa siirtymällä seuraavaan linkkiin.",ariaFocusSkipLink:"Siirry avoimeen kohovalikkoon kaksoisnapauttamalla.",ariaCloseSkipLink:"Sulje avoin kohovalikko kaksoisnapauttamalla."},
"oj-pullToRefresh":{ariaRefreshLink:"Päivitä sisältö ottamalla käyttöön linkki",ariaRefreshingLink:"Päivitetään sisältöä",ariaRefreshCompleteLink:"Päivitys valmis"},"oj-ojIndexer":{indexerOthers:"#",ariaDisabledLabel:"Ei vastaavaa ryhmän otsikkoa",ariaOthersLabel:"luku",ariaInBetweenText:"Välillä {first} ja {second}",ariaKeyboardInstructionText:"Valitse arvo painamalla Enter-näppäintä.",ariaTouchInstructionText:"Siirry eletilaan kaksoisnapauttamalla ja painamalla ja säädä sitten arvoa vetämällä ylös- tai alaspäin."},
"oj-ojMenu":{labelCancel:"Peruuta"}});