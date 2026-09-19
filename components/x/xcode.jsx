import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9t7r_beh.css';
import '../../css/o/ot-ja0ext.css';
import '../../css/x/xzna_cbux.css';
import '../../css/s/suv371o5h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9t7r_beh"/><g class="ot-ja0ext"><path transform="matrix(.50714 -.15926 .15877 .5054 2.596 1.629)" class="xzna_cbux"/><path transform="matrix(.50714 -.15926 .15877 .5054 2.596 1.629)" class="suv371o5h"/></g>`,
		"fallback": "catppuccin:xcode",
	});
}

export default Component;
