import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm_8_wbdg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQJe1xbJd"><path class="jm_8_wbdg"/></mask></defs><path mask="url(#SVGQJe1xbJd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:windows",
	});
}

export default Component;
