import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgga7abld.css';
import '../../css/l/lbjs96bea.css';
import '../../css/d/dm_j5gglv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMjWPne7J"><g class="cgga7abld"><path class="lbjs96bea"/><path class="dm_j5gglv"/></g></mask></defs><path mask="url(#SVGMjWPne7J)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:weightlifting",
	});
}

export default Component;
