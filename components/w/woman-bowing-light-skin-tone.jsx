import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkoasrbaf.css';
import '../../css/y/y5decorob.css';
import '../../css/t/t701zpdwx.css';
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
		"content": `<path class="hkoasrbaf"/><path class="y5decorob"/><path class="t701zpdwx"/><g class="z04drlb1l"><path class="hgvne7zws"/><path class="j3hoeozfo"/><path class="v6vmjt5rj"/></g>`,
		"fallback": "openmoji:woman-bowing-light-skin-tone",
	});
}

export default Component;
