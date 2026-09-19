import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6d6qdzqs.css';
import '../../css/a/asxhdcc8z.css';
import '../../css/q/qg2n9pbkz.css';
import '../../css/j/j3sro6chq.css';
import '../../css/c/c6tcmab-v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z6d6qdzqs"/><path class="asxhdcc8z"/><path class="qg2n9pbkz"/><path class="j3sro6chq"/><path class="c6tcmab-v"/></g>`,
		"fallback": "fluent-emoji-flat:wheel",
	});
}

export default Component;
