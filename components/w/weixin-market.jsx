import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mamdlmb_f.css';
import '../../css/v/v8lrvwzjl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mamdlmb_f"/><path class="v8lrvwzjl"/></g>`,
		"fallback": "icon-park-outline:weixin-market",
	});
}

export default Component;
