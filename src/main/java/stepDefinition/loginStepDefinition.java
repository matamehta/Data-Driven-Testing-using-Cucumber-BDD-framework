package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginStepDefinition {

	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void user_is_already_on_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver","D:\\chromedriver\\chromedriver.exe");
	   driver=new ChromeDriver();
	   driver.manage().window().maximize();
	   driver.get("https://www.freecrm.com/");
	}

	@When("^User enters \"(.*)\" and \"(.*)\" on login page$")
	public void user_enters_username_and_password_on_login_page(String username,String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@type='text' and @name='username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(password);
	    
	}

	@And("^User clicks on Login button$")
	public void user_clicks_on_Login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement loginBtn =
		driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js=(JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);
	    
	}

	@And("^User is navigated to Home page$")
	public void user_is_navigated_to_Home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//CRMPRO
		String title=driver.getTitle();
		Assert.assertEquals("CRMPRO",title);
	}
		
	@Then("^Browser is closed$")
	public void browser_is_closed() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    driver.quit();
	}

	    
	
	
}
