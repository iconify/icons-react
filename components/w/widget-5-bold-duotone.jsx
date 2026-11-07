import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kegcs-8wl.css';
import '../../css/u/urak06bsx.css';
import '../../css/m/mucmghbzo.css';
import '../../css/z/zi-y_bbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="kegcs-8wl"/><path class="urak06bsx"/></g><path class="mucmghbzo"/><path class="zi-y_bbxk"/>`,
		"fallback": "solar:widget-5-bold-duotone",
	});
}

export default Component;
