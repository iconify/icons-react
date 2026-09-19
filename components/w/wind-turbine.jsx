import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3-fdubsi.css';
import '../../css/q/q1rpp7bgb.css';
import '../../css/q/qznx_nb7p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGf8Qy0dXC"><g class="ft5dv1b6b"><path class="e3-fdubsi"/><path class="q1rpp7bgb"/><circle class="qznx_nb7p"/></g></mask></defs><path mask="url(#SVGf8Qy0dXC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:wind-turbine",
	});
}

export default Component;
