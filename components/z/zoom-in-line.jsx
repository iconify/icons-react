import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er_zoepac.css';
import '../../css/z/zov54cbdm.css';
import '../../css/z/zz20r9bzu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 er_zoepac"/><path class="clr-i-outline clr-i-outline-path-2 zov54cbdm"/><path class="clr-i-outline clr-i-outline-path-3 zz20r9bzu"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:zoom-in-line",
	});
}

export default Component;
