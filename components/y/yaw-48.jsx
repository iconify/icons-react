import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu2zepmmt.css';
import '../../css/t/tqfgg-3gm.css';
import '../../css/z/zn068rbjz.css';
import '../../css/t/tlr0lfb8k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu2zepmmt"/><path class="tqfgg-3gm"/><path class="zn068rbjz"/><path class="tlr0lfb8k"/>`,
		"fallback": "energy-icons:yaw-48",
	});
}

export default Component;
