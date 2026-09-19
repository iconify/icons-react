import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gwi6sywyz.css';
import '../../css/w/wc19j6nte.css';
import '../../css/l/lza45ccox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gwi6sywyz"/><path class="wc19j6nte"/><circle class="lza45ccox"/></g>`,
		"fallback": "hugeicons:wifi-01",
	});
}

export default Component;
