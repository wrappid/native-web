// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { CoreBox } from "@wrappid/core";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import { SCList } from "../../styledComponents/layouts/SCList";

export default function NativeList(props) {
  const { children, ...restProps } = props; 
  const listStyleClasses = () => {
    let styleClasses = [];

    styleClasses.push(UtilityClasses.PADDING.PL5);
    switch (props.listType) {
      case "NONE":
        styleClasses.push(UtilityClasses.LIST_STYLE.NONE);
        break;

      case "CJK_HEAVENLY_STEM":
        styleClasses.push(UtilityClasses.LIST_STYLE.CJK_HEAVENLY_STEM);
        break;
        
      case "ARABIC_INDIC":
        styleClasses.push(UtilityClasses.LIST_STYLE.ARABIC_INDIC);
        break;

      case "DISC":
        styleClasses.push(UtilityClasses.LIST_STYLE.DISC);
        break;

      case "CIRCLE":
        styleClasses.push(UtilityClasses.LIST_STYLE.CIRCLE);
        break;

      case "SQUARE":
        styleClasses.push(UtilityClasses.LIST_STYLE.SQUARE);
        break;

      case "DECIMAL":
        styleClasses.push(UtilityClasses.LIST_STYLE.DECIMAL);
        break;

      case "DECIMAL_LEADING_ZERO":
        styleClasses.push(UtilityClasses.LIST_STYLE.DECIMAL_LEADING_ZERO);
        break;

      case "ARMENIAN":
        styleClasses.push(UtilityClasses.LIST_STYLE.ARMENIAN);
        break;

      case "BENGALI":
        styleClasses.push(UtilityClasses.LIST_STYLE.BENGALI);
        break;

      case "CAMBODIAN":
        styleClasses.push(UtilityClasses.LIST_STYLE.CAMBODIAN);
        break;

      case "CJK_EARTHLY_BRANCH":
        styleClasses.push(UtilityClasses.LIST_STYLE.CJK_EARTHLY_BRANCH);
        break;

      case "CJK_IDEOGRAPHIC":
        styleClasses.push(UtilityClasses.LIST_STYLE.CJK_IDEOGRAPHIC);
        break;

      case "ETHIOPIC_HALEHAME":
        styleClasses.push(UtilityClasses.LIST_STYLE.ETHIOPIC_HALEHAME);
        break;

      case "ETHIOPIC_HALEHAME_AM":
        styleClasses.push(UtilityClasses.LIST_STYLE.ETHIOPIC_HALEHAME_AM);
        break;

      case "ETHIOPIC_HALEHAME_TI_ER":
        styleClasses.push(UtilityClasses.LIST_STYLE.ETHIOPIC_HALEHAME_TI_ER);
        break;

      case "ETHIOPIC_HALEHAME_TI_ET":
        styleClasses.push(UtilityClasses.LIST_STYLE.ETHIOPIC_HALEHAME_TI_ET);
        break;

      case "GEORGIAN":
        styleClasses.push(UtilityClasses.LIST_STYLE.GEORGIAN);
        break;

      case "GUJARATI":
        styleClasses.push(UtilityClasses.LIST_STYLE.GUJARATI);
        break;

      case "HANGUL":
        styleClasses.push(UtilityClasses.LIST_STYLE.HANGUL);
        break;

      case "HANGUL_CONSONANT":
        styleClasses.push(UtilityClasses.LIST_STYLE.HANGUL_CONSONANT);
        break;

      case "HEBREW":
        styleClasses.push(UtilityClasses.LIST_STYLE.HEBREW);
        break;

      case "HIRAGANA":
        styleClasses.push(UtilityClasses.LIST_STYLE.HIRAGANA);
        break;

      case "HIRAGANAIROHA":
        styleClasses.push(UtilityClasses.LIST_STYLE.HIRAGANAIROHA);
        break;

      case "INSIDE":
        styleClasses.push(UtilityClasses.LIST_STYLE.INSIDE);
        break;

      case "KANNADA":
        styleClasses.push(UtilityClasses.LIST_STYLE.KANNADA);
        break;

      case "KATAKANA":
        styleClasses.push(UtilityClasses.LIST_STYLE.KATAKANA);
        break;

      case "KATAKANA_IROHA":
        styleClasses.push(UtilityClasses.LIST_STYLE.KATAKANA_IROHA);
        break;

      case "KHMER":
        styleClasses.push(UtilityClasses.LIST_STYLE.KHMER);
        break;

      case "KOREAN_HANJA_FORMAL":
        styleClasses.push(UtilityClasses.LIST_STYLE.KOREAN_HANJA_FORMAL);
        break;

      case "KOREAN_HANGUL_FORMAL":
        styleClasses.push(UtilityClasses.LIST_STYLE.KOREAN_HANGUL_FORMAL);
        break;

      case "KOREAN_HANJA_INFORMAL":
        styleClasses.push(UtilityClasses.LIST_STYLE.KOREAN_HANJA_INFORMAL);
        break;

      case "LAO":
        styleClasses.push(UtilityClasses.LIST_STYLE.LAO);
        break;

      case "LOWER_ALPHA":
        styleClasses.push(UtilityClasses.LIST_STYLE.LOWER_ALPHA);
        break;

      case "LOWER_ARMENIAN":
        styleClasses.push(UtilityClasses.LIST_STYLE.LOWER_ARMENIAN);
        break;

      case "LOWER_LATIN":
        styleClasses.push(UtilityClasses.LIST_STYLE.LOWER_LATIN);
        break;

      case "LOWER_GREEK":
        styleClasses.push(UtilityClasses.LIST_STYLE.LOWER_GREEK);
        break;

      case "LOWER_ROMAN":
        styleClasses.push(UtilityClasses.LIST_STYLE.LOWER_ROMAN);
        break;

      case "MALAYALAM":
        styleClasses.push(UtilityClasses.LIST_STYLE.MALAYALAM);
        break;

      case "MONGOLIAN":
        styleClasses.push(UtilityClasses.LIST_STYLE.MONGOLIAN);
        break;

      case "MYANMAR":
        styleClasses.push(UtilityClasses.LIST_STYLE.MYANMAR);
        break;

      case "ORIYA":
        styleClasses.push(UtilityClasses.LIST_STYLE.ORIYA);
        break;

      case "OUTSIDE":
        styleClasses.push(UtilityClasses.LIST_STYLE.OUTSIDE);
        break;

      case "PERSIAN":
        styleClasses.push(UtilityClasses.LIST_STYLE.PERSIAN);
        break;

      case "SIMP_CHINESE_FORMAL":
        styleClasses.push(UtilityClasses.LIST_STYLE.SIMP_CHINESE_FORMAL);
        break;

      case "SIMP_CHINESE_INFORMAL":
        styleClasses.push(UtilityClasses.LIST_STYLE.SIMP_CHINESE_INFORMAL);
        break;

      case "TELUGU":
        styleClasses.push(UtilityClasses.LIST_STYLE.TELUGU);
        break;

      case "THAI":
        styleClasses.push(UtilityClasses.LIST_STYLE.THAI);
        break;

      case "TIBETAN":
        styleClasses.push(UtilityClasses.LIST_STYLE.TIBETAN);
        break;

      case "TRAD_CHINESE_FORMAL":
        styleClasses.push(UtilityClasses.LIST_STYLE.TRAD_CHINESE_FORMAL);
        break;

      case "TRAD_CHINESE_INFORMAL":
        styleClasses.push(UtilityClasses.LIST_STYLE.TRAD_CHINESE_INFORMAL);
        break;

      case "UPPER_ALPHA":
        styleClasses.push(UtilityClasses.LIST_STYLE.UPPER_ALPHA);
        break;

      case "UPPER_ARMENIAN":
        styleClasses.push(UtilityClasses.LIST_STYLE.UPPER_ARMENIAN);
        break;

      case "UPPER_LATIN":
        styleClasses.push(UtilityClasses.LIST_STYLE.UPPER_LATIN);
        break;

      case "UPPER_ROMAN":
        styleClasses.push(UtilityClasses.LIST_STYLE.UPPER_ROMAN);
        break;

      case "URDU":
        styleClasses.push(UtilityClasses.LIST_STYLE.URDU);
        break;

      case "INHERIT":
        styleClasses.push(UtilityClasses.LIST_STYLE.INHERIT);
        break;

      case "INITIAL":
        styleClasses.push(UtilityClasses.LIST_STYLE.INITIAL);
        break;

      case "REVERT":
        styleClasses.push(UtilityClasses.LIST_STYLE.REVERT);
        break;

      case "REVERT_LAYER":
        styleClasses.push(UtilityClasses.LIST_STYLE.REVERT_LAYER);
        break;

      case "UNSET":
        styleClasses.push(UtilityClasses.LIST_STYLE.UNSET);
        break;
          
      default:
        styleClasses.push(UtilityClasses.LIST_STYLE.AUTO);
    }

    return [...styleClasses, ...(props?.styleClasses || [])];
  };
  const listItemStyleClasses = (childProps) => {
    let styleClasses = [];

    if (props.listType) {
      styleClasses.push(UtilityClasses.DISPLAY.LIST_ITEM, UtilityClasses.PADDING.P0);
    }
    return [...styleClasses, ...(childProps?.styleClasses || [])];
  };

  return <CoreBox styleClasses={[UtilityClasses.PADDING.PL2]}><SCList
    styleClasses={listStyleClasses()}
    {...restProps}>{
      React.Children.map(children, child => {
        const updatedProps = {
          ...child.props, // Spread existing props
          styleClasses: listItemStyleClasses(child.props)
        };

        return React.cloneElement(child, updatedProps); // Pass both props
      })}</SCList></CoreBox>;
}

