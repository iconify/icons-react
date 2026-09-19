import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lyj3e5zew.css';
import '../../css/v/v8lrvwzjl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lyj3e5zew"/><path class="v8lrvwzjl"/></g>`,
		"fallback": "icon-park-solid:weixin-market",
	});
}

export default Component;
