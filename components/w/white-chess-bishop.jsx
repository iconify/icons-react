import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bksauhb2k.css';
import '../../css/e/el5avswvr.css';
import '../../css/l/l41p0248x.css';
import '../../css/l/l_1bv1bce.css';
import '../../css/r/rxa9rtbju.css';
import '../../css/d/dnlw5ubyr.css';
import '../../css/f/fw9drl_hd.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/z/z5fklxhkg.css';
import '../../css/g/gcqeicc4p.css';
import '../../css/h/hrl54mtaq.css';
import '../../css/z/zwfw_yhhc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3.693 6.164)scale(.8974)"><path class="bksauhb2k"/><path class="el5avswvr"/><path class="l41p0248x"/><circle class="l_1bv1bce"/><path class="rxa9rtbju"/><path class="dnlw5ubyr"/><circle class="fw9drl_hd"/></g><g transform="translate(3.693 6.164)scale(.8974)" class="rpvb-o6bq"><circle class="z5fklxhkg"/><path class="gcqeicc4p"/><path class="hrl54mtaq"/><circle class="zwfw_yhhc"/></g>`,
		"fallback": "openmoji:white-chess-bishop",
	});
}

export default Component;
