import { BasePage } from "./base-page";

export class PersonalPage extends BasePage {
  linkPersonalPage = "https://material.playwrightvn.com/";
  xpathPersonalPage = '//a[@href="04-xpath-personal-notes.html"]';
  xpathTitle = '//input[@placeholder="Enter note title"]';
  xpathContent = '//textarea[@id="note-content"]';
  xpathAddNote = '//button[@id="add-note"]';
  xpathSearchNote = '//input[@id="search"]';

  //go to page
  async goToLinkPage() {
    await this.page.goto(this.linkPersonalPage);
  }
  //go to PersonalPage
  async goToPersonalPage() {
    const PersonalPageElement = this.page.locator(this.xpathPersonalPage);
    await PersonalPageElement.click();
  }
  //thêm mới 10 note có nội dung là tiêu đề và một phần ngắn
  async addNote(title: string, content: string) {
    const titlexpath = this.page.locator(this.xpathTitle);
    const contentxpath = this.page.locator(this.xpathContent);
    await titlexpath.fill(title);
    await contentxpath.fill(content);
    const addNotexpath = this.page.locator(this.xpathAddNote);
    await addNotexpath.click();
  }
}
