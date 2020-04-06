import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const WordColorIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 32 32" className={classes.svg}>
      <path d="M26.703 9a.96.96 0 0 1 .297.703V29c0 .271-.099.505-.297.703S26.271 30 26 30H7c-.271 0-.505-.099-.703-.297S6 29.271 6 29v-6H3.172c-.323 0-.599-.115-.828-.344S2 22.151 2 21.828V10.172c0-.323.115-.599.344-.828S2.849 9 3.172 9H6V3c0-.271.099-.505.297-.703S6.729 2 7 2h12.297a.96.96 0 0 1 .703.297M20 9h5.297L20 3.703M26 10h-6c-.271 0-.505-.099-.703-.297S19 9.271 19 9V3H7v6h7.828c.323 0 .599.115.828.344s.344.505.344.828v11.656c0 .323-.115.599-.344.828s-.505.344-.828.344H7v6h19M13.766 12h-1.359l-1.125 5.594-1.594-5.438H8.484l-1.688 5.438L5.688 12H4.234l1.609 8h1.438l1.766-5.516L10.719 20h1.438M24 15h-7v-1h7m0 3h-7v-1h7m0 3h-7v-1h7v1z" />
      <path
        fill="#FAFAFA"
        d="M6.5 29V3a.484.484 0 0 1 .5-.5h12.297c.135 0 .25.047.344.141L26.36 9.36c.093.093.14.208.14.343V29a.484.484 0 0 1-.5.5H7a.484.484 0 0 1-.5-.5z"
      />
      <path
        fill="#797774"
        d="M26.703 9a.96.96 0 0 1 .297.703V29c0 .271-.099.505-.297.703S26.271 30 26 30H7c-.271 0-.505-.099-.703-.297S6 29.271 6 29V3c0-.271.099-.505.297-.703S6.729 2 7 2h12.297a.96.96 0 0 1 .703.297M20 9h5.297L20 3.703M26 29V10h-6c-.271 0-.505-.099-.703-.297S19 9.271 19 9V3H7v26h19z"
      />
      <path fill="#41A5EE" d="M24 15h-7v-1h7v1z" />
      <path fill="#2B7CD3" d="M24 17h-7v-1h7v1z" />
      <path
        fill="#185ABD"
        d="M24 19h-7v-1h7v1zM14.828 23H3.172c-.323 0-.599-.115-.828-.344S2 22.151 2 21.828V10.172c0-.323.115-.599.344-.828S2.849 9 3.172 9h11.656c.323 0 .599.115.828.344s.344.505.344.828v11.656c0 .323-.115.599-.344.828s-.505.344-.828.344z"
      />
      <path
        fill="#FFF"
        d="M12.156 20h-1.438l-1.672-5.516L7.281 20H5.844l-1.609-8h1.453l1.109 5.594 1.688-5.438h1.203l1.594 5.438L12.406 12h1.359l-1.609 8z"
      />
    </svg>
  ),
  displayName: 'WordColorIcon',
});

export default WordColorIcon;
