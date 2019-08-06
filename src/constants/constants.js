export const SCHEMA = {
    CONTINENTS_LIST : {
        query:`{continents{name,code}}`
    },
    CONTINENT_DETAIL : {
        query:`{continent(code:"code_placeholder"){name,countries {name,phone,emoji,native,currency,code,languages{name,code}}}}`
        }
}

export const SHOW_LOADER = "SHOW_LOADER";