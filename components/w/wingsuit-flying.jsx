import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgga7abld.css';
import '../../css/s/si50jvboo.css';
import '../../css/b/bf_msp58c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhNHrpdRn"><g class="cgga7abld"><path class="si50jvboo"/><path class="bf_msp58c"/></g></mask></defs><path mask="url(#SVGhNHrpdRn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:wingsuit-flying",
	});
}

export default Component;
