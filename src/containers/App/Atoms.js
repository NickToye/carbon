import React from 'react';

import ColourIndex from '../../components/Colour/ColoursCard';
import FontIndex from '../../components/Font/Index';
import AnimationIndex from '../../components/Animation/Index';
import ButtonIndex from '../../components/Button/Index';
import FormControlIndex from '../../components/FormControl/Index';
import ImageIndex from '../../components/Image/Index';
import TypographyIndex from '../../components/Typography/TypographyCard';

const Atoms = () => (
  <div>    
    <section>
      <header className="u-margin-bottom">
        <h1 className="u-margin-none">Global</h1>
        <p>These are not technically UI components, but they are an integral part of the overall atomic design system.</p>
      </header>
      
      <ColourIndex />
      <FontIndex />
      <AnimationIndex />
    </section>
    
    <section>
      <header>
        <h1 className="u-margin-none">Interactivity</h1>
        <p>These are the UI components for all the interactivity and data capture throughout the design system.</p>
      </header>
      
      <ButtonIndex />
      <FormControlIndex />
    </section>
    
    <section>
      <header>
        <h1 className="u-margin-none">Cosmetics</h1>
        <p>These are the UI components for all the cosmetic aspects of the design system.</p>
      </header>
      
      <ImageIndex />
      <TypographyIndex />
    </section>
    
  </div>
);

export default Atoms;