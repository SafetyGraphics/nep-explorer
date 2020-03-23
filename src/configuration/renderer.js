export default function renderer() {
    return {
        // data mappings
        id_col: 'USUBJID',
        visit_col: 'VISIT',
        visitn_col: 'VISITNUM',
        studyday_col: 'DY',
        measure_col: 'TEST',
        value_col: 'STRESN',
        unit_col: 'STRESU',
        normal_col_low: 'STNRLO',
        normal_col_high: 'STNRHI',
        baseline_col: 'ABLFL',

        // value mappings
        measure_values: {
            // creatinine-based measures
            creat: 'Creatinine',
            egfr_creat: 'eGFR',

            // cystatin C-based measures
            cystatc: 'Cystatin C',
            egfr_cystatc: 'eGFRcys',

            // kidney function-related measures
            bun: 'Blood Urea Nitrogen',
            sodium: 'Sodium',
            k: 'Potassium',
            bicarb: 'Bicarbonate',
            cl: 'Chloride',
            phos: 'Phosphorus',
            ca: 'Calcium',

            // blood pressure
            diabp: 'Diastolic Blood Pressure',
            sysbp: 'Systolic Blood Pressure',

            // albumin/creatinine
            alb: 'Albumin',
            albcreat: 'Albumin/Creatinine'
        },

        // renderer settings
        filters: [],
        groups: [],
        details: [
            { value_col: 'AGE', label: 'Age' },
            { value_col: 'SEX', label: 'Sex' },
            { value_col: 'RACE', label: 'Race' }
        ],
        baseline_value: 'Y',
        kdigo_criteria: [
            {
                label: 'No AKI',
                x: 0,
                y: 0,
                color: 'white'
            },
            {
                label: 'Stage 1 AKI',
                x: 1.5,
                y: 25,
                color: '#ffffbf'
            },
            {
                label: 'Stage 2 AKI',
                x: 2,
                y: 50,
                color: '#fdae61'
            },
            {
                label: 'Stage 3 AKI',
                x: 3,
                y: 75,
                color: '#d73027'
            }
        ],
    };
}
