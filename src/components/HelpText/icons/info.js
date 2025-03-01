import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';
import { darken } from '../../../styles/helpers/color';

function InfoIcon({ className, style, isFocused }) {
    const gray = useTheme().rainbow.palette.text.header;
    const background = isFocused ? darken(gray) : gray;
    return (
        <svg width={22} height={22} viewBox="0 0 22 22" className={className} style={style}>
            <path
                fill={background}
                d="M11 0c6.074 0 11 4.925 11 11 0 6.074-4.926 11-11 11-6.075 0-11-4.926-11-11C0 4.925 4.925 0 11 0zm-.589 8.8c-.377 0-.778.066-1.201.202-.424.134-.868.296-1.332.485l-.187.771c.136-.052.302-.105.493-.164.192-.056.38-.083.563-.083.373 0 .624.061.757.187.131.125.197.349.197.667 0 .18-.02.376-.063.59-.043.212-.097.44-.16.68L8.77 14.64c-.062.263-.108.498-.137.707-.028.208-.042.413-.042.613 0 .515.19.939.57 1.273.38.334.913.502 1.598.502.446 0 .838-.059 1.175-.176.339-.117.79-.287 1.355-.51l.19-.77c-.1.045-.256.098-.472.158-.218.06-.41.09-.583.09-.365 0-.623-.06-.77-.18-.149-.12-.222-.347-.222-.678 0-.132.022-.327.068-.583.046-.256.097-.485.155-.686l.705-2.495c.069-.23.116-.48.142-.755.025-.274.038-.466.038-.575 0-.525-.186-.953-.553-1.281-.37-.328-.895-.494-1.576-.494zm1.566-4.57c-.462 0-.86.154-1.192.463-.328.309-.496.681-.496 1.114 0 .434.167.806.496 1.111.332.305.73.458 1.192.458.463 0 .859-.153 1.188-.458.328-.305.493-.676.493-1.11 0-.434-.165-.806-.493-1.115-.328-.309-.725-.462-1.188-.462z"
            />
        </svg>
    );
}
InfoIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    isFocused: PropTypes.bool,
};

InfoIcon.defaultProps = {
    className: undefined,
    style: undefined,
    isFocused: false,
};
export default InfoIcon;
