import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/y/y_6ylzqwy.css';
import '../../css/c/ca7o-fbra.css';
import '../../css/g/gjycp3bsi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="y_6ylzqwy"/><path clip-rule="evenodd" class="ca7o-fbra"/><path class="gjycp3bsi"/></g>`,
		"fallback": "streamline-kameleon-color:wind-flag-pop",
	});
}

export default Component;
