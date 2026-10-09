import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcffi5bhx.css';
import '../../css/b/bmcqqkc-j.css';
import '../../css/v/vxcyymb5d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcffi5bhx"/><path class="bmcqqkc-j"/><path class="vxcyymb5d"/>`,
		"fallback": "energy-icons:whisk-20-bold",
	});
}

export default Component;
