import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/e/e-6oifs0n.css';
import '../../css/r/r395l6xbw.css';
import '../../css/i/i-8dbccqw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4kTyDeBb"><g class="ufeehvblu"><path class="e-6oifs0n"/><path class="r395l6xbw"/><path class="i-8dbccqw"/></g></mask></defs><path mask="url(#SVG4kTyDeBb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:zoom-in",
	});
}

export default Component;
