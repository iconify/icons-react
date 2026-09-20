import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq0ttvbij.css';
import '../../css/k/k-ec91pho.css';
import '../../css/z/zvkmwrbhb.css';
import '../../css/s/sc9p7i35j.css';
import '../../css/e/e_vr_fbgx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oq0ttvbij"/><path class="k-ec91pho"/><path class="zvkmwrbhb"/><path class="sc9p7i35j"/><path class="e_vr_fbgx"/></g>`,
		"fallback": "streamline-kameleon-color:yacht-duo",
	});
}

export default Component;
