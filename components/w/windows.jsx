import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9r4tloyv.css';
import '../../css/k/kuz2w4bjq.css';
import '../../css/y/yrh162bqt.css';
import '../../css/s/sxow_ibmj.css';
import '../../css/h/h9rnambvp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="b9r4tloyv"><path class="kuz2w4bjq"/><path class="yrh162bqt"/><path class="sxow_ibmj"/><path class="h9rnambvp"/></g>`,
		"fallback": "icon-park:windows",
	});
}

export default Component;
