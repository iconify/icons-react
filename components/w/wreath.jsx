import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fpw7l9b3n.css';
import '../../css/m/mu7ekohwc.css';
import '../../css/k/kzsarmpqw.css';
import '../../css/f/f1os_4dcm.css';
import '../../css/t/tkya-sj7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="fpw7l9b3n wm-shadow"/><path class="mu7ekohwc wm-shadow"/><path class="kzsarmpqw"/><path class="f1os_4dcm"/><path class="tkya-sj7w"/></g>`,
		"fallback": "withicons-brutal:wreath",
	});
}

export default Component;
