import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bav9mgbzy.css';
import '../../css/s/sdxioac2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="bav9mgbzy"/><path class="sdxioac2w"/></g>`,
		"fallback": "icon-park-solid:weixin-cards-offers",
	});
}

export default Component;
