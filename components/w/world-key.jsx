import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hgdv6fb8f.css';
import '../../css/z/zgjj__krh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hgdv6fb8f"/><path class="zgjj__krh"/></g>`,
		"fallback": "tabler:world-key",
	});
}

export default Component;
