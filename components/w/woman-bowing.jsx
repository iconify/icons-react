import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkoasrbaf.css';
import '../../css/q/qzjkp5g3e.css';
import '../../css/z/zeuyfga3p.css';
import '../../css/z/z04drlb1l.css';
import '../../css/h/hgvne7zws.css';
import '../../css/j/j3hoeozfo.css';
import '../../css/v/v6vmjt5rj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkoasrbaf"/><path class="qzjkp5g3e"/><path class="zeuyfga3p"/><g class="z04drlb1l"><path class="hgvne7zws"/><path class="j3hoeozfo"/><path class="v6vmjt5rj"/></g>`,
		"fallback": "openmoji:woman-bowing",
	});
}

export default Component;
