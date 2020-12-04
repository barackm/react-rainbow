import React from 'react';
import PropTypes from 'prop-types';

const Exclamation = props => {
    const { className, style } = props;
    return (
        <svg
            fill="currentColor"
            className={className}
            style={style}
            width="1rem"
            height="1rem"
            viewBox="0 0 18 18"
        >
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Path-DesignGuidelines"
                    transform="translate(-909.000000, -628.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-10" transform="translate(429.000000, 617.000000)">
                        <g id="cancel" transform="translate(480.000000, 11.000000)">
                            <path
                                d="M8.98247368,-1.47082346e-12 C13.9433569,-1.47082346e-12 17.9649474,4.02159045 17.9649474,8.98247368 C17.9649474,13.9433569 13.9433569,17.9649474 8.98247368,17.9649474 C4.02159045,17.9649474 -5.61328761e-13,13.9433569 -5.61328761e-13,8.98247368 C-5.61328761e-13,4.02159045 4.02159045,-1.47082346e-12 8.98247368,-1.47082346e-12 Z M9.16988641,12.2673399 C8.87027215,12.2673399 8.61678887,12.3707789 8.40997849,12.5775893 C8.20343906,12.7846707 8.1,13.0356476 8.1,13.3306555 C8.1,13.6682719 8.20797765,13.9311033 8.42440712,14.1186756 C8.64036241,14.306451 8.89384569,14.4 9.18404408,14.4 C9.46943293,14.4 9.71885181,14.304893 9.9327749,14.1151531 C10.1472399,13.9248035 10.2542015,13.6634624 10.2542015,13.3306555 C10.2542015,13.0355798 10.148256,12.7843997 9.93663608,12.5775893 C9.72474519,12.370508 9.46970389,12.2673399 9.16988641,12.2673399 Z M9.22692354,3.6 C8.88951033,3.6 8.61678887,3.71028081 8.40997849,3.93206174 C8.20343906,4.15309754 8.1,4.46104382 8.1,4.85569738 C8.1,5.14562481 8.12106716,5.62366637 8.16387887,6.2895511 L8.16387887,6.2895511 L8.39223059,9.70629167 C8.43483909,10.1485665 8.50630484,10.4780541 8.60642464,10.6940771 C8.70600252,10.9107776 8.8842266,11.0184843 9.14123237,11.0184843 C9.39295441,11.0184843 9.57395583,10.9069164 9.68342376,10.6836452 C9.79316265,10.459832 9.86442518,10.1389474 9.89761781,9.72024612 L9.89761781,9.72024612 L10.204548,6.20338575 C10.2374697,5.88073987 10.2542015,5.56161648 10.2542015,5.24757359 C10.2542015,4.71554321 10.1850389,4.30747712 10.0473911,4.0243237 C9.90974328,3.74144123 9.63600572,3.6 9.22692354,3.6 Z"
                                id="Combined-Shape"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Exclamation.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Exclamation.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Exclamation;
