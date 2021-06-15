import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i }); // $ means have scoop at the end of alt text
  expect(scoopImages).toHaveLength(2);

  // confrim alt text of image
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocalate scoop", "Vanilla scoop"]); // for array and object , the matcher will be 'toEqual' where number/string use 'toBe'
});
